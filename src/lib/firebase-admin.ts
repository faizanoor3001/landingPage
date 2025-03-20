import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

// Check if we need to initialize the app
if (!getApps().length) {
  try {
    // Debug: Check if private key exists
    if (!process.env.FIREBASE_PRIVATE_KEY) {
      throw new Error('FIREBASE_PRIVATE_KEY environment variable is not set')
    }

    // Debug: Log key info
    console.log('Private key exists:', !!process.env.FIREBASE_PRIVATE_KEY)
    console.log('Private key length:', process.env.FIREBASE_PRIVATE_KEY.length)
    console.log('Private key starts with:', process.env.FIREBASE_PRIVATE_KEY.substring(0, 50))

    // Initialize with explicit string conversion
    initializeApp({
      credential: cert({
        projectId: 'zoroiot-poc-3b968',
        clientEmail: 'firebase-adminsdk-fbsvc@zoroiot-poc-3b968.iam.gserviceaccount.com',
        privateKey: String(process.env.FIREBASE_PRIVATE_KEY).replace(/\\n/g, '\n'),
      })
    })
  } catch (error) {
    console.error('Error initializing Firebase Admin:', error)
    // Debug: Log all environment variables (excluding values)
    console.error('Available environment variables:', Object.keys(process.env))
    throw error
  }
}

// Get Firestore instance
const adminDb = getFirestore()

export { adminDb } 