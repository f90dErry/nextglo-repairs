import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAkGHNQL6BF_0-KO8vG1-1K_6DrqFyI6zo',
  authDomain: 'nextglo-lab.firebaseapp.com',
  projectId: 'nextglo-lab',
  storageBucket: 'nextglo-lab.firebasestorage.app',
  messagingSenderId: '911751819839',
  appId: '1:911751819839:web:9af8aace3a68b4ba6d3e8a',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
