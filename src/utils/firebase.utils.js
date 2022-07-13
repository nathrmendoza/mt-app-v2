import {initializeApp} from 'firebase/app'

//---AUTHENTICATION imports---//
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'

//---FIRESTORE imports---//
import {
  doc,
  getDoc,
  getFirestore,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

//--------- INITIALIZE APP ----------//
const app = initializeApp(firebaseConfig);


//--------- START: AUTHENTICATON ----------//

export const auth = getAuth(app);

//Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

/**
 * Sign in with google provider
 */
export const googleSignIn = () => signInWithPopup(auth, googleProvider);
export const googleSignInRedirect = () => signInWithRedirect(auth, googleProvider);

/**
 * Sign in with facebook provider
 */
export const facebookSignIn = () => signInWithPopup(auth, facebookProvider);
export const facebookSignInRedirect = () => signInWithRedirect(auth, facebookProvider);

/**
 * Sign in with email and password
 */
export const signInWithEmailPassword = async (email, password) => {
  if (!email || !password) return
  
  return await signInWithEmailAndPassword(auth, email, password)
}

/**
 * Create user for auth with email and password
 * 
 * @param {string} email 
 * @param {string} password 
 * @param {string} displayName
 */
export const signUpWithEmailPassword = async (email, password, displayName) => {
  if (!email || !password || !displayName) return

  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  updateProfile(user, {
    displayName: displayName
  })

  return user 
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback) 

export const signOutUser = async () => signOut(auth);

//--------- END: AUTHENTICATON ----------//



//--------- START: FIRESTORE DB ----------//

export const db = getFirestore()

export const checkUserDocRefExists = async (user) => {
  
  if (!user) return
  
  const userDocRef = doc(db, 'users', user.uid);
  const userDocSnapshot = await getDoc(userDocRef);
  
  return userDocSnapshot.exists()
  
}

//create user details document in users collection
export const createUserDoc = async (user, options={}) => {
  if (!user) return

  const userDocRef = doc(db, 'users', user.uid);
  const createdAt = new Date();
  
  return await setDoc(userDocRef, {
    ...options,
    createdAt
  });

}

//--------- END: FIRESTORE DB ----------//