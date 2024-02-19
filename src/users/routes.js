const { Router } = require("express");
const userRouter = Router();

const { signupUser } = require("./controllers");

userRouter.post("/users/signup", signupUser);

module.exports = userRouter;
