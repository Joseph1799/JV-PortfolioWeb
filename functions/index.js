const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");

// Configura la API Key de SendGrid
// eslint-disable-next-line max-len
sgMail.setApiKey("");

exports.sendEmail = functions.https.onRequest((req, res) => {
  const {to, subject, text} = req.body;

  const msg = {
    to,
    from: "",
    subject,
    text,
  };

  sgMail.send(msg)
      .then(() => {
        res.status(200).send({success: true});
      })
      .catch((error) => {
        res.status(500).send({success: false, error: error.toString()});
      });
});
