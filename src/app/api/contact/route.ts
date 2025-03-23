import { NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'
import { Timestamp } from 'firebase-admin/firestore'

// Rate limit window in minutes
const RATE_LIMIT_WINDOW = 60
// Maximum submissions per window
const MAX_SUBMISSIONS = 5

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()
    const headers = request.headers

    // Rate limiting check
    const oneHourAgo = new Date(Date.now() - RATE_LIMIT_WINDOW * 60 * 1000)
    const submissionsRef = adminDb.collection('contact_submissions')
    
    // Query only by timestamp to avoid composite index
    const recentSubmissions = await submissionsRef
      .where('timestamp', '>=', Timestamp.fromDate(oneHourAgo))
      .get()

    if (recentSubmissions.size >= MAX_SUBMISSIONS) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      )
    }

    // Add submission to Firestore
    await submissionsRef.add({
      name,
      email,
      phone,
      message,
      ip: headers.get('x-forwarded-for') || 'unknown',
      timestamp: Timestamp.now(),
      userAgent: headers.get('user-agent') || 'unknown'
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    )
  }
} 