import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

// Check if we need to initialize the app
if (!getApps().length) {
  try {
    // Check if private key exists
    if (!process.env.FIREBASE_PRIVATE_KEY) {
      throw new Error('FIREBASE_PRIVATE_KEY environment variable is not set')
    }

    // Initialize with the private key directly from environment variable
    // The key is already properly formatted with \n characters from Vercel
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID || 'zoroiot-poc-3b968',
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL || 'firebase-adminsdk-fbsvc@zoroiot-poc-3b968.iam.gserviceaccount.com',
        privateKey: process.env.FIREBASE_PRIVATE_KEY
      })
    })
  } catch (error) {
    console.error('Error initializing Firebase Admin:', error)
    throw error
  }
}

// Get Firestore instance
const adminDb = getFirestore()

export { adminDb } 