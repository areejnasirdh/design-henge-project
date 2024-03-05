import nodemailer from "nodemailer";
export const sendEmail = async (subject, name, email, phone, content) => {
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    // secure: true,
    // tls: {
    //   ciphers: "SSLv3",
    //   rejectUnauthorized: false,
    // },
    auth: {
      user: "muhammadehtishamdh@gmail.com",
      pass: "MBQfNc8tqLb3wH7p",
    },
  });
  const message = {
    from: email,
    to: "leads@designhenge.com",
    cc: ["mirmurtazadh359@gmail.com", "affaq359@gmail.com", "areejdh359@gmail.com"],
    subject: subject,

    html: `<div>
        <h1>Name: ${name}</h1>
        <h1>Email: ${email}</h1>
        <h1>Phone Number: ${phone}</h1>
        <h1>Message: ${content} </h1>
        </div>`,
  };

  const info = await transporter.sendMail(message);

  console.log("Message sent: %s", info.messageId);
};