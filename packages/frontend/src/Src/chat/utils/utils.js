import { MSGCONSTANT } from "./constants";

export const loadingReducer = (state, action) => {
  switch (action.type) {
    case "start":
      return {
        showsearch: true,
        isloaded: false,
        error: false,
        message: "",
      };
    case "success":
      return {
        showsearch: true,
        isloaded: true,
        error: false,
        message: "",
      };
    case "error":
      return {
        showsearch: true,
        isloaded: true,
        error: true,
        message: action.payload.message,
      };
    case "clear":
      return {
        showsearch: false,
        isloaded: true,
        error: false,
        message: "",
      };
    default:
      return {
        showsearch: true,
        isloaded: true,
        error: true,
        message: "Unkown Problem occured while searching the user !!!",
      };
  }
};

export const msgReducer = (state, action) => {
  switch (action.type) {
    case MSGCONSTANT.UPDATEFILE:
      return {
        ...state,
        file: action.payload.file,
      };
    case MSGCONSTANT.UPDATETEXT:
      console.log(action.payload.text);
      return {
        ...state,
        text: action.payload.text,
      };
    default:
      return state;
  }
};
