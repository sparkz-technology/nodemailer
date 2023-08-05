import Axios from "axios";
export default async function sendEmail(subject, message) {
  const response = await Axios.post(
    "http://localhost:5000/api/send-email",
    {
      subject,
      message,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
}
