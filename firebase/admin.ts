import { getApps, initializeApp, cert } from "firebase-admin/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const initFirebaseAdmin = () => {
    const apps = getApps()
    if (!apps.length) {
        initializeApp({
            credential: cert({
                projectId: process.env.PROJECTID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_LEY?.replace("/\\n/g", "\n")
            })
        })
    }

    return {
        auth: getAuth(),
        db: getFirestore()
    }
}

export const {auth, db} = initFirebaseAdmin()