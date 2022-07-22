const Joi = require("joi");
const models = require("../models");

class LanguageController {
  static browse = (req, res) => {
    models.language
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  /**
   * Méthode de lecture ou de récupération d'un langage en particulier
   * @param {*} req
   * @param {*} res
   */
  static read = (req, res) => {
    models.language
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  /**
   * Méthode pour la modification d'un langage
   * @param {*} req
   * @param {*} res
   */
  static edit = (req, res) => {
    const language = req.body;
    const { languageName, languageIcon, yearOfXP } = req.body;

    const { error } = Joi.object({
      languageName: Joi.string().max(255).required(),
      languageIcon: Joi.string().max(255).required(),
      yearOfXP: Joi.number().max(10),
    }).validate({
      languageName,
      languageIcon,
      yearOfXP,
    });

    if (error) {
      res.status(422).json({ validationsErrors: error.details });
    }

    language.id = parseInt(req.params.id, 10);

    try {
      models.language
        .update(language)
        .then(([result]) => {
          if (result.affectedRows === 0) {
            res.sendStatus(404);
          } else {
            res.sendStatus(204);
          }
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  };

  /**
   * Méthode d'ajout d'un nouveau langage
   * @param {*} req
   * @param {*} res
   */
  static add = (req, res) => {
    const { languageName, languageIcon, yearOfXP } = req.body;

    const { error } = Joi.object({
      languageName: Joi.string().max(255).required(),
      languageIcon: Joi.string().max(255).required(),
      yearOfXP: Joi.number().max(10),
    }).validate({
      languageName,
      languageIcon,
      yearOfXP,
    });

    if (error) {
      res.status(422).json({ validationsErrors: error.details });
    }

    const language = {
      languageName,
      languageIcon,
      yearOfXP,
    };
    models.language
      .insert(language)
      .then(([result]) => {
        res.status(201).send({ ...language, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  /**
   * Méthode pour la suppression d'un langage
   * @param {*} req
   * @param {*} res
   */
  static delete = (req, res) => {
    const languageId = parseInt(req.params.id, 10);

    models.language
      .delete(languageId)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = LanguageController;
