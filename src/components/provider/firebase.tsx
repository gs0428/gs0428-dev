import { initializeApp } from "firebase/app";

function FirebaseProvider({ children }: { children: React.ReactNode }) {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: `${process.env.NEXT_PUBLIC_PROJECT_ID}.firebaseapp.com`,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: `${process.env.NEXT_PUBLIC_PROJECT_ID}.firebasestorage.app`,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  };

  initializeApp(firebaseConfig);

  return children;
}

export default FirebaseProvider;
