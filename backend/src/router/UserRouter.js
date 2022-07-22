const express = require("express");

const { UserController } = require("../controllers");

const UserRouter = express.Router();

UserRouter.get("/users", UserController.browse);
UserRouter.get("/users/:id", UserController.read);
UserRouter.put("/users/:id", UserController.edit);
UserRouter.post("/users", UserController.add);
UserRouter.delete("/users/:id", UserController.delete);

module.exports = UserRouter;
