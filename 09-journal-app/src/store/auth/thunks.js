import { signInWithGoogle } from "../../firebase/providers"; /* mandamos a llamar la funcion */
import { checkingCredentials } from "./";

export const checkingAunthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingAunthentication());
    const result = await signInWithGoogle();
    console.log(result)
  };
};
