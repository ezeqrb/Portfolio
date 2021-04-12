const nodemailer = require('nodemailer');

 const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "ezequielromerobertani@gmail.com",
      pass: "ktgchrwctkwxcgor"
    }
  });

  // verify connection configuration
transporter.verify().then(()=>{
    console.log("ready for send emails")
})


module.exports = transporter