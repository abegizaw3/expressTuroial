import express, { Request, Response, Router } from "express";

export const userRouter = express.Router(); //like app in server.ts, but it is entirely on its own
//This will read top to bottom

userRouter.get("/", (req, res) => {
  res.send("User list");
});
userRouter.post("/", (req, res) => {
  res.send("Create User");
});

userRouter.get("/new", (req, res) => {
  res.send("User New Form");
});

//To chain your get put and delete requests
userRouter
  .route("/:id")
  .get((req, res) => {
    const userID = req.params.id;
    res.send(`Get User with ID ${userID}`);
  })
  .put((req, res) => {
    const userID = req.params.id;
    res.send(`Update User with ID ${userID}`);
  })
  .delete((req, res) => {
    const userID = req.params.id;
    res.send(`Delete User with ID ${userID}`);
  });
