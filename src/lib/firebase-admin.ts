import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

// Check if we need to initialize the app
if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: 'zoroiot-poc-3b968',
      clientEmail: 'firebase-adminsdk-fbsvc@zoroiot-poc-3b968.iam.gserviceaccount.com',
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
    })
  })
}

// Get Firestore instance
const adminDb = getFirestore()

export { adminDb } 