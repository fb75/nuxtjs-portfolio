const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json());

let name,
  email,
  msg = "";

app.post("/", (req, res) => {
  name = req.body.name;
  email = req.body.email;
  msg = req.body.msg;
  console.log(req.body);
  sendMail(name, email, msg);
  res.status(200).json({ message: "OH YEAH" });
});

const sendMail = (name, email, msg) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gunner19751@gmail.com",
      pass: "franci061075"
    }
  });
  transporter.sendMail({
    from: email,
    to: "gunner19751@gmail.com",
    subject: "Thanks for registering, " + name,
    html:
      '<img src="https://images.pexels.com/photos/128299/pexels-photo-128299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" /><br><p>Grazie per avermi contattato! A presto</p>'
  });
};

module.exports = {
  path: "/api/contact",
  handler: app
};
