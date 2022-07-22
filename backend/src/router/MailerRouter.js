const express = require("express");

const { MailerController } = require("../controllers");

const MailerRouter = express.Router();

MailerRouter.post("/sendMail", MailerController.sendMail);

module.exports = MailerRouter;
