import { useReducer } from "react";
import sendEmail from "../services/apiEmail";

const initialState = {
  subject: "",
  message: "",
  isLoading: false,
  done: false,
  response: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_SUBJECT":
      return { ...state, subject: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    case "SET_ISLOADING":
      return { ...state, isLoading: action.payload };
    case "SET_DONE":
      return { ...state, done: action.payload };
    case "SET_RESPONSE":
      return { ...state, response: action.payload };
    default:
      return state;
  }
}

export function useMail() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_ISLOADING", payload: true });
    dispatch({ type: "SET_RESPONSE", payload: "" });

    try {
      await sendEmail(state.subject, state.message);
      dispatch({ type: "SET_RESPONSE", payload: "Email sent successfully !" });
      dispatch({ type: "SET_DONE", payload: true });
    } catch (error) {
      dispatch({
        type: "SET_RESPONSE",
        payload: "Error sending email: " + error.message,
      });
      dispatch({ type: "SET_DONE", payload: true });
    } finally {
      dispatch({ type: "SET_ISLOADING", payload: false });
    }
  };

  return {
    ...state,
    handleSubmit,
    dispatch,
  };
}
