import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
<<<<<<< Updated upstream
import { collection, addDoc } from 'firebase/firestore'
=======
import { collection, addDoc, query, where, getDocs, Timestamp } from 'firebase/firestore'

// Rate limit window in minutes
const RATE_LIMIT_WINDOW = 60
// Maximum submissions per window
const MAX_SUBMISSIONS = 5

async function checkRateLimit(ip: string): Promise<boolean> {
  const now = Timestamp.now()
  const windowStart = new Date(now.toDate().getTime() - (RATE_LIMIT_WINDOW * 60 * 1000))
  
  const submissionsRef = collection(db, 'contact_submissions')
  const q = query(
    submissionsRef,
    where('ip', '==', ip),
    where('timestamp', '>=', Timestamp.fromDate(windowStart))
  )
  
  const querySnapshot = await getDocs(q)
  return querySnapshot.size < MAX_SUBMISSIONS
}
>>>>>>> Stashed changes

export async function POST(req: Request) {
  try {
<<<<<<< Updated upstream
    const body = await request.json()
=======
    const body = await req.json()
>>>>>>> Stashed changes
    const { 
      // Basic fields
      name, 
      email,
      company,
      jobTitle,
      phone,
      preferredContact,
      bestTimeToContact,
      message,
      // Advanced fields (optional)
      industry = '',
      timeframe = '',
      existingSetup = ''
    } = body
<<<<<<< Updated upstream

    // Validate required fields
    if (!name || !email || !company || !jobTitle || !phone || !message || !preferredContact || !bestTimeToContact) {
      return NextResponse.json(
=======
    
    // Get client IP
    const forwardedFor = req.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown'
    
    // Check rate limit
    const isAllowed = await checkRateLimit(ip)
    if (!isAllowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Validate required fields
    if (!name || !email || !company || !jobTitle || !phone || !message || !preferredContact || !bestTimeToContact) {
      return NextResponse.json(
>>>>>>> Stashed changes
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Add document to Firestore
    const docRef = await addDoc(collection(db, 'contactSubmissions'), {
      // Basic fields
      name,
      email,
      company,
      jobTitle,
      phone,
      preferredContact,
      bestTimeToContact,
      message,
      // Advanced fields
      industry,
      timeframe,
      existingSetup,
      // Metadata
      submitted: new Date().toISOString(),
<<<<<<< Updated upstream
      isAdvancedSubmission: Boolean(industry || timeframe || existingSetup)
=======
      isAdvancedSubmission: Boolean(industry || timeframe || existingSetup),
      ip // Store IP for rate limiting
    })

    // Also store submission for rate limiting
    await addDoc(collection(db, 'contact_submissions'), {
      contactId: docRef.id,
      ip,
      timestamp: Timestamp.now()
>>>>>>> Stashed changes
    })

    return NextResponse.json(
      { message: 'Form submitted successfully', id: docRef.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error submitting form:', error)
    return NextResponse.json(
      { message: 'Error submitting form' },
      { status: 500 }
    )
  }
} 