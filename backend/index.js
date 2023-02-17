const express = require('express');
const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
const app = express();
dotenv.config();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post('send-email', (req, res) => {
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d381dbb32c6d9e",
      pass: "26e59512139361"
    }
  });
    

    var mailOpciones = {
      from: 'Remitente',
      to: "matiassabbadini24@gmail.com",
      subject: "Contacto Entrevista",
      text: 'Hola Mundo'
    }

    transport.sendEmail(mailOpciones, (error, info) => {
      if(error){
        console.log(error)
        res.status(500).send(error.message)
      } else {
        console.log('Email enviando')
        res.status(200).jsonp(req.body)
      }
    })
  })

app.listen(3001);
console.log('Server on port 3001')