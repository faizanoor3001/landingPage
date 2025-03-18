import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, addDoc } from 'firebase/firestore'

export async function POST(request: Request) {
  try {
    const body = await request.json()
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

    // Validate required fields
    if (!name || !email || !company || !jobTitle || !phone || !message || !preferredContact || !bestTimeToContact) {
      return NextResponse.json(
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
      isAdvancedSubmission: Boolean(industry || timeframe || existingSetup)
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