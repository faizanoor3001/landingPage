import { NextResponse } from 'next/server'
import { getFirestore, collection, addDoc, query, where, getDocs, Timestamp } from 'firebase/firestore'
import app from '@/lib/firebase'

// Rate limit window in minutes
const RATE_LIMIT_WINDOW = 60
const RATE_LIMIT_MAX_REQUESTS = 5

async function checkRateLimit(ip: string): Promise<boolean> {
  const db = getFirestore(app)
  const now = Timestamp.now()
  const windowStart = Timestamp.fromDate(new Date(now.toDate().getTime() - (RATE_LIMIT_WINDOW * 60 * 1000)))
  
  const submissionsRef = collection(db, 'contact_submissions')
  const q = query(
    submissionsRef,
    where('ip', '==', ip),
    where('timestamp', '>=', windowStart)
  )
  
  const querySnapshot = await getDocs(q)
  return querySnapshot.size < RATE_LIMIT_MAX_REQUESTS
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Get client IP for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown'
    
    // Check rate limit
    const isAllowed = await checkRateLimit(ip)
    if (!isAllowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Initialize Firestore
    const db = getFirestore(app)

    // Add the contact form submission to Firestore
    const docRef = await addDoc(collection(db, 'contacts'), {
      name,
      email,
      message,
      timestamp: Timestamp.now(),
      ip // Store IP for rate limiting
    })

    // Store submission for rate limiting
    await addDoc(collection(db, 'contact_submissions'), {
      contactId: docRef.id,
      ip,
      timestamp: Timestamp.now()
    })

    return NextResponse.json(
      { message: 'Contact form submitted successfully', id: docRef.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error in contact form submission:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 