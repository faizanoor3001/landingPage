import { NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'
import { Timestamp } from 'firebase-admin/firestore'

// Rate limit window in minutes
const RATE_LIMIT_WINDOW = 60
// Maximum submissions per window
const MAX_SUBMISSIONS = 5

async function checkRateLimit(ip: string): Promise<boolean> {
  const now = Timestamp.now()
  const windowStart = new Date(now.toDate().getTime() - (RATE_LIMIT_WINDOW * 60 * 1000))
  
  const submissionsRef = adminDb.collection('contact_submissions')
  const q = submissionsRef
    .where('ip', '==', ip)
    .where('timestamp', '>=', windowStart)
  
  const querySnapshot = await q.get()
  return querySnapshot.size < MAX_SUBMISSIONS
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
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
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Add document to Firestore
    const contactSubmissionRef = await adminDb.collection('contactSubmissions').add({
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
      isAdvancedSubmission: Boolean(industry || timeframe || existingSetup),
      ip // Store IP for rate limiting
    })

    // Also store submission for rate limiting
    await adminDb.collection('contact_submissions').add({
      contactId: contactSubmissionRef.id,
      ip,
      timestamp: Timestamp.now()
    })

    return NextResponse.json(
      { message: 'Form submitted successfully', id: contactSubmissionRef.id },
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