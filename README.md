## Email Sending App
Email Sending App is a simple web application built using Node.js, Express, and React. It allows users to send emails through a contact form. The backend uses Nodemailer to send the emails, while the frontend is designed using React for a smooth user experience. Users can fill out the subject and message fields and click the "Send Email" button to send the message. If the email is sent successfully, a "Success Celebrated!" message is displayed; otherwise, an error message is shown.
### Technology Used

- Backend:
  - Node.js
  - Express
  - Nodemailer
  - CORS (Cross-Origin Resource Sharing)
  - Body-parser

- Frontend:
  - React
  - Axios (for making API requests)
  - CSS (for styling)

### Usage

1. Fill out the contact form with the subject and message you want to send.
2. Click on the "Send Email" button to submit the form.
3. If the email is sent successfully, you will see a "Success Celebrated!" message.
4. If there is an error sending the email, an error message will be displayed.

Please note that this is a simple email sending application designed for educational purposes. Additional security measures and validation would be required for production use. Ensure that you have correctly configured the email service provider credentials in the backend `app.js` file before using the application.
