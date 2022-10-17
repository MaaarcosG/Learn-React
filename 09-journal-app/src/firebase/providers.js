import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
