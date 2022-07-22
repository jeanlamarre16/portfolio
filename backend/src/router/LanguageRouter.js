const express = require("express");

const { LanguageController } = require("../controllers");

const LanguageRouter = express.Router();

LanguageRouter.get("/languages", LanguageController.browse);
LanguageRouter.get("/languages/:id", LanguageController.read);
LanguageRouter.put("/languages/:id", LanguageController.edit);
LanguageRouter.post("/languages", LanguageController.add);
LanguageRouter.delete("/languages/:id", LanguageController.delete);

module.exports = LanguageRouter;
