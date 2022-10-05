import React from "react";
import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

// const initialState = {
//   logged: false,
// };

const init = () => {
  /* guardamos en el localstorage pero para el reducer*/
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, init);

  const onLogin = (name = "") => {
    const user = {
      id: "ABC",
      name,
    };

    const action = {
      type: types.login,
      payload: user,
    };

    /* guardamos dentro del localstorage */
    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };

  const onLogOut = () => {
    localStorage.removeItem("user");
    const action = {
      type: types.logout,
    };
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{ ...state, login: onLogin, logout: onLogOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
