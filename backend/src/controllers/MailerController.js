const mailerContact = require("../services/MailerTemplate");

class MailerController {
  static sendMail = (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    try {
      mailerContact(firstName, lastName, email, phone, message);
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(400).send("ERR_BAD_REQUEST");
    }
  };
}

module.exports = MailerController;
