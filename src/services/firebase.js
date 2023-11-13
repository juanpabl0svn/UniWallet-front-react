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
  onAuthStateChanged,
} from "firebase/auth";

import { getDatabase, ref, onValue, update } from "firebase/database";

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
  databaseURL: "https://uniwa-d3190-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export function getUser(username, password) {
  const userRef = ref(db, `/`);
  // Retorna una promesa que se resuelve con los datos del usuario
  return new Promise((resolve, reject) => {
    onValue(
      userRef,
      (snapshot) => {
        const userData = snapshot.val();
        const [user] = Object.values(userData).filter(
          (user) => user.email == username && user.password == password
        );
        if (user) {
          resolve(user);
        } else {
          reject("No se encontraron datos del usuario");
        }
      },
      {
        onlyOnce: true,
      }
    );
  });
}

export function getUserData(username) {
  const userRef = ref(db, `/`);
  // Retorna una promesa que se resuelve con los datos del usuario
  return new Promise((resolve, reject) => {
    onValue(
      userRef,
      (snapshot) => {
        const userData = snapshot.val();
        const [user] = Object.values(userData).filter(
          (user) => user.email == username
        );
        if (user) {
          resolve(user);
        } else {
          reject("No se encontraron datos del usuario");
        }
      },
      {
        onlyOnce: true,
      }
    );
  });
}

export async function updateUserData(username, value) {
  const userRef = ref(db, `/`);
  return new Promise((resolve, reject) => {
    onValue(
      userRef,
      (snapshot) => {
        const userData = snapshot.val();
        const [key] = Object.keys(userData).filter(
          (key) => userData[key].email == username
        );
        if (key) {
          const user = userData[key];
          user.currency = parseFloat(user.currency) + parseFloat(value);
          if (user?.movements == undefined) {
            user.movements = [];
          }
          const newMovement = {
            amount: parseFloat(value),
            from: "Admin",
            to: `${user.name} ${user.surname}`,
            type: true,
          };
          user.movements.push(newMovement);

          userData[key] = user;
          update(userRef, userData)
            .then(() => resolve("Succes"))
            .catch(() => reject("Not succes"));
        } else {
          reject("No se encontraron datos del usuario");
        }
      },
      {
        onlyOnce: true,
      }
    );
  });
}

// const db = getFirestore(app);

// const auth = getAuth(app);

// export async function isTokenActive(token) {
//   const user = auth.currentUser;
//   if (user) {
//     try {
//       const tokenFromLocalStorage = token;
//       const idToken = await user.getIdToken(true);

//       if (tokenFromLocalStorage === idToken) {
//         // Token es válido y coincide con el actual
//         return { isValid: true, token: idToken };
//       } else {
//         // Token no es válido o no coincide con el actual
//         localStorage.setItem("firebaseToken", idToken); // Opcional: actualizar el token en localStorage
//         return { isValid: false, token: null };
//       }
//     } catch (error) {
//       console.error("Error verifying the token:", error);
//       return { isValid: false, token: null, error };
//     }
//   } else {
//     // No hay usuario logueado
//     return { isValid: false, token: null, error: "No user logged in" };
//   }
// }

// async function getAuthToken({ username, password }) {
//   try {
//     const userCredentialExist = await createUserWithEmailAndPassword(
//       auth,
//       username,
//       password
//     );

//     return userCredentialExist;
//   } catch (err) {
//     if (err.code === "auth/email-already-in-use") {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         username,
//         password
//       );

//       return userCredential;
//     }
//     console.log(err);
//     return null;
//   }
// }

// export async function loginFirebase(username, password) {
//   // Busca el correo asociado al nombre de usuario
//   const usersColRef = collection(db, "users");
//   const q = query(
//     usersColRef,
//     where("username", "==", username),
//     where("password", "==", password)
//   );
//   const querySnapshot = await getDocs(q);

//   if (querySnapshot.empty) {
//     console.error("Username not found");
//     return null;
//   }

//   const { password: secretPassword, ...rest } = querySnapshot.docs[0].data();

//   try {
//     const { user } = await getAuthToken({ username, password });
//     if (user == null) {
//       console.log("Somthing went wrong");
//       return null;
//     }
//     console.log("User logged in:", user.uid);

//     return {
//       token: user.uid,
//       ...rest,
//     };
//   } catch (error) {
//     console.error("Error logging in:", error.message);
//     return null;
//   }
// }

// export async function getUser(username, password) {
//   const usersColRef = collection(db, "users");
//   const q = query(
//     usersColRef,
//     where("username", "==", username),
//     where("password", "==", password)
//   );
//   const querySnapshot = await getDocs(q);
//   const users = querySnapshot.docs.map((doc) => doc.data());
//   console.log(users);
// }

// export async function addData(user) {
//   const userDocRef = doc(db, "users", user.id);
//   await setDoc(userDocRef, user);
// }
