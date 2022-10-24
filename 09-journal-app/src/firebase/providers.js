import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider(); /* crear una nueva instancia */

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);

    const { displayName, email, photoURL, uid } =
      result.user; /* obtenemos los datos de autenticacion de firebase */
    return {
      ok: true,
      // user informacion
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    /* creamos la cuenta en firebase */
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;

    // TODO: ACTUALIZAR EL DISPLAY EN FIREBASE
    await updateProfile(FirebaseAuth.currentUser, {
      displayName,
    }); /* currentUser es para ver el usuario actual autenticado  */

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL, displayName } = (await resp).user;

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
    
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const logOutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
