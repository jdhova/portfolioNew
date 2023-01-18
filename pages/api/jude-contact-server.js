import nodemailer from "nodemailer";

async function RedirectMail(userName, email, service, message) {

  let privateData = {
    host: "smtp-relay.sendinblue.com",
    auth: {
      user: "juud0010@gmail.com",
      pass: "qW9P47yNKpICTkRw",
    },
  };

  let transporter = nodemailer.createTransport(privateData);
  let mailTemplate = {
    from: email,
    to: "juud0010@gmail.com",
    subject: `Portfolio, the Project is related to ${service}`, // Subject line
    text: `<b>User Details</b>\nName: <b>${userName}</b>.\nEmail: <b>${email}</b>\nService: <b>${service}</b>.\n\n<b>===( The Message is )===</b>\n${message}`, // plain text body
  };
  try {
    let messageResponse = await transporter.sendMail(mailTemplate);
    return messageResponse;
  } catch (err) {
    return err;
  }
}

export default async function handler(req, res) {
  let {
    method,
    body: { userName, email, service, message },
  } = req;

  if (method === "GET") {
    res.status(200).json({ Response: "SERVER IS WORKING" });
  }
  if (method === "POST") {
    try {
      let messageResponse = await RedirectMail(
        userName,
        email,
        service,
        message
      );
      if (messageResponse.errno) {
        throw "Something went wrong";
      }
      res.status(200).send("success");
    } catch (err) {
      res.status(200).json({ message: err });
    }
  }
}
