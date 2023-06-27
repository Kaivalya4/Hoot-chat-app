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
