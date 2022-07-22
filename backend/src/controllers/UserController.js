const argon2 = require("argon2");
const Joi = require("joi");
const models = require("../models");

class UserController {
  static browse = (req, res) => {
    models.user
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.user
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

  static edit = (req, res) => {
    const user = req.body;

    user.id = parseInt(req.params.id, 10);

    models.user
      .update(user)
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
  };

  /**
   *
   * Permet l'insertion d'un utilisateur avec après validation via Joi
   * @param {requete HTTP} req
   * @param {Réponse HTTP} res
   */
  static add = async (req, res) => {
    const {
      firstname,
      lastname,
      address,
      city,
      email,
      phone,
      postalcode,
      age,
      gender,
      password,
      training,
      presentation,
      status,
    } = req.body;

    const { error } = Joi.object({
      firstname: Joi.string().max(255).required(),
      lastname: Joi.string().max(255).required(),
      email: Joi.string().email().max(255).required(),
      phone: Joi.string().max(10).required(),
      address: Joi.string().max(255).required(),
      postalcode: Joi.string().max(5).required(),
      city: Joi.string().max(255).required(),
      status: Joi.string().max(255).required(),
      age: Joi.number().max(150),
      gender: Joi.string().max(6),
      presentation: Joi.string().max(255),
      training: Joi.string().max(255),
    }).validate({
      firstname,
      lastname,
      email,
      phone,
      address,
      postalcode,
      city,
      age,
      gender,
      presentation,
      training,
      status,
    });

    if (error) {
      res.status(422).json({ validationsErrors: error.details });
    } else {
      try {
        const hash = await argon2.hash(password);
        models.user
          .insert({
            firstname,
            lastname,
            address,
            city,
            phone,
            postalcode,
            age,
            gender,
            email,
            password: hash,
            training,
            presentation,
            status,
          })
          .then(([result]) => {
            res.status(201).send({
              firstname,
              lastname,
              address,
              city,
              phone,
              postalcode,
              age,
              gender,
              email,
              password: hash,
              training,
              presentation,
              status,
              id: result.insertId,
            });
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500).send({ error: err.message });
          });
      } catch (err) {
        console.error(err);
        res.sendStatus(500).send({ error: err.message });
      }
    }
  };

  /**
   * Permet la suppression d'un utilisateur dans la base de données
   * @param {*} req
   * @param {*} res
   */

  static delete = (req, res) => {
    models.user
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = UserController;
