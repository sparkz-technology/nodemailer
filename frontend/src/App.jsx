import { useState } from "react";
import Axios from "axios";
import "./App.css";
function App() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setSubject("");
    setDone(true);

    Axios.post("http://localhost:5000/api/send-email", {
      subject,
      message,
    })
      .then(() => {
        console.log("Email sent successfully");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <div className="container">
      {done ? (
        <h1>Success Celebrated! 🎉</h1>
      ) : (
        <>
          <h1>Send Email</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Send Email</button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
