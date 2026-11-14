import express from "express";

const authRouter = express.Router();

// signup :

authRouter.get("/signup", (req, res) => {
  res.json({
    msg: "signup",
  });
});

// login : 

authRouter.get("/login", (req, res) => {
  res.json({
    msg: "login",
  });
});

// logout :

authRouter.get("/logout", (req, res) => {
  res.json({
    msg: "logout",
  });
});

export { authRouter };
