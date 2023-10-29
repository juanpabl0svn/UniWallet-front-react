// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  doc,
  updateDoc,
  collection,
  getDocs,
  setDoc,
  query,
  where,
  getFirestore,
} from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH6GfvqEnrdwJMCW_zJYCIc-gCrhOHl8U",
  authDomain: "uniwa-d3190.firebaseapp.com",
  projectId: "uniwa-d3190",
  storageBucket: "uniwa-d3190.appspot.com",
  messagingSenderId: "1030143833926",
  appId: "1:1030143833926:web:93a8748576da6df93f9747",
  measurementId: "G-EGV6HBCR61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

async function register(username, email, password) {
  // Primero verifica si el nombre de usuario ya existe
  const usersColRef = collection(db, "users");
  const q = query(usersColRef, where("username", "==", username));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    console.error("Username already taken");
    return;
  }

  // Si el nombre de usuario está disponible, registra el correo y contraseña con Firebase Auth
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Aquí puedes añadir código para guardar el nombre de usuario en Firestore asociado a ese UID.
    console.log("User registered:", user.uid);
  } catch (error) {
    console.error("Error registering user:", error.message);
  }
}

async function login(username, password) {
  // Busca el correo asociado al nombre de usuario
  const usersColRef = collection(db, "users");
  const q = query(usersColRef, where("username", "==", username));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    console.error("Username not found");
    return;
  }

  const userEmail = querySnapshot.docs[0].data().email; // Suponiendo que guardas el email bajo el campo 'email'

  // Ahora intenta iniciar sesión con Firebase Auth usando ese correo y la contraseña dada
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      userEmail,
      password
    );
    const user = userCredential.user;
    console.log("User logged in:", user.uid);
  } catch (error) {
    console.error("Error logging in:", error.message);
  }
}

export async function getUser(username, password) {
  const usersColRef = collection(db, "users");
  const q = query(
    usersColRef,
    where("username", "==", username),
    where("password", "==", password)
  );
  const querySnapshot = await getDocs(q);
  const users = querySnapshot.docs.map((doc) => doc.data());
  console.log(users);
}

export async function addData(user) {
  const userDocRef = doc(db, "users", "userID");
  await setDoc(userDocRef, user);
}
