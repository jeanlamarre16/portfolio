const Joi = require("joi");
const models = require("../models");

class ProjectController {
  static browse = (req, res) => {
    models.project
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
    models.project
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
   * Modifier un projet
   * @param {*} req
   * @param {*} res
   */
  static edit = (req, res) => {
    const projectId = parseInt(req.params.id, 10);
    const {
      projectName,
      createdAt,
      description,
      progression,
      nbOfCollaborators,
    } = req.body;

    const { error } = Joi.object({
      projectName: Joi.string().max(255).required(),
      createdAt: Joi.date().greater("now"),
      description: Joi.string().max(255).required(),
      progression: Joi.number().max(100),
      nbOfCollaborators: Joi.number().max(10),
    }).validate({
      projectName,
      createdAt,
      description,
      progression,
      nbOfCollaborators,
    });

    if (error) {
      res.status(422).json({ validationsErrors: error.details });
    }

    const projectData = {
      projectName,
      createdAt,
      description,
      progression,
      nbOfCollaborators,
      projectId,
    };

    try {
      models.project
        .update(projectData)
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
   * Ajour d'un nouveau projet
   * @param {*} req
   * @param {*} res
   */
  static add = async (req, res) => {
    const {
      projectName,
      createdAt,
      description,
      progression,
      nbOfCollaborators,
    } = req.body;

    const { error } = Joi.object({
      projectName: Joi.string().max(255).required(),
      createdAt: Joi.date().greater("now"),
      description: Joi.string().max(255).required(),
      progression: Joi.number().max(100),
      nbOfCollaborators: Joi.number().max(10),
    }).validate({
      projectName,
      createdAt,
      description,
      progression,
      nbOfCollaborators,
    });

    if (error) {
      res.status(422).json({ validationsErrors: error.details });
    }
    try {
      models.project
        .insert({
          projectName,
          createdAt,
          description,
          progression,
          nbOfCollaborators,
        })
        .then(([result]) => {
          res.status(201).send({
            projectName,
            createdAt,
            description,
            progression,
            nbOfCollaborators,
            id: result.insertId,
          });
        })
        .catch((err) => {
          console.error(err);
          return res.status(500).send({ error: err.message });
        });
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  };

  /**
   * Suppression d'un projet
   * @param {*} req
   * @param {*} res
   */
  static delete = (req, res) => {
    const projectId = parseInt(req.params.id, 10);
    models.project
      .delete(projectId)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  /**
   * récupérer les projets en les associant respectivement avec le ou les langage.s utilisés
   * @param {*} req
   * @param {*} res
   */
  static projectsByLanguageCategory = (req, res) => {
    models.project
      .findAllProjectByLanguage()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ProjectController;
