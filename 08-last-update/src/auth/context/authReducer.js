import { types } from "../types/types";

/* reducer nunca llama una funcionalidad externa */
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        /* evitamos modificaciones */
        ...state,
        logged: true,
        user: action.payload,
      };
    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
