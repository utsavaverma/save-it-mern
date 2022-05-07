//This file is used to send OTP to the registered email address of NGO.

const nodemailer = require("nodemailer");

//function to send OTP
const sendMail = async (receiverEmail, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nodemailer9099@gmail.com",
      pass: "nm909999",
    },
  });

  //defining the body of the email
  const mailOptions = {
    from: "nodemailer9099@gmail.com",
    to: receiverEmail,
    subject: "Your OTP is here!",
    text: "Your OTP is: " + otp,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return "Error";
    } else {
      return "Sucess";
    }
  });
};

module.exports = sendMail;
