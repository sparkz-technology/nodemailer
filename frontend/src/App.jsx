import "./App.css";
import { useMail } from "./hooks/useMail";
function App() {
  const {
    done,
    response,
    subject,
    isLoading,
    message,
    handleSubmit,
    dispatch,
  } = useMail();
  return (
    <div className="container">
      {done ? (
        <h1>{response}</h1>
      ) : (
        <>
          <h1>Send Email</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              disabled={isLoading}
              onChange={(e) =>
                dispatch({ type: "SET_SUBJECT", payload: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Message"
              value={message}
              disabled={isLoading}
              onChange={(e) =>
                dispatch({ type: "SET_MESSAGE", payload: e.target.value })
              }
              required
            ></textarea>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Email"}
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
