const express = require("express");

const { ProjectController } = require("../controllers");

const ProjectRouter = express.Router();

ProjectRouter.get("/projects", ProjectController.browse);
ProjectRouter.get(
  "/projects/category",
  ProjectController.projectsByLanguageCategory
);
ProjectRouter.get("/projects/:id", ProjectController.read);
ProjectRouter.put("/projects/:id", ProjectController.edit);
ProjectRouter.post("/projects", ProjectController.add);
ProjectRouter.delete("/projects/:id", ProjectController.delete);

module.exports = ProjectRouter;
