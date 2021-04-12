const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer')
const app = express();
const port = 3001;
const {transporter} = require('./transporter-api')

let password = "ktgchrwctkwxcgor"


app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/contactform', async (req, res) => {
    let data = req.body
    console.log(data)
  
    await transporter.sendMail({
      from: '"Portfolio consulting" <ezequielromerobertani@gmail.com>', // sender address
      to:'ezequielromerobertani@gmail.com', // list of receivers
      subject: "Portfolio Consulting", // Subject line
      
      html: `<b>
              im ${data.name}
              email ${data.email}
              message ${data.message}
            </b>`, // html body
    });
   
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));