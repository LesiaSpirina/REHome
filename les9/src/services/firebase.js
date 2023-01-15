import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getDatabase, ref } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDsKpzdgm1oxIiunMIUPx2FbMWaqPgP0Ro",
  authDomain: "gb-react-les9.firebaseapp.com",
  projectId: "gb-react-les9",
  storageBucket: "gb-react-les9.appspot.com",
  messagingSenderId: "822060227646",
  appId: "1:822060227646:web:52bd000888bb7a57c1456f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)

export const signUp = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password)

export const signIn = async (email, password) => await signInWithEmailAndPassword(firebaseAuth, email, password)

export const logOut = async () => await signOut(firebaseAuth)

const db = getDatabase(app)

export const userRef = ref(db, 'user')
export const messagesRef = ref(db, 'messages')

export const getChatById = (chatId) => ref(db, `messages/ ${chatId}`)

export const getMessageListById = (chatId) => ref(db, `messages/ ${chatId}/messageList`)