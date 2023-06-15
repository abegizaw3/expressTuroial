import express, { Request, Response, Router } from "express";
interface CustomRequest extends Request {
  user?: any; // Replace `any` with the appropriate type for the `user` property
}

export const userRouter = express.Router(); //like app in server.ts, but it is entirely on its own
//This will read top to bottom

/**
 * / route from users. Root route
 * @date 6/15/2023 - 9:19:21 AM
 */

userRouter
  .route("/")
  .get((req, res) => {
    res.send("User list");
  })
  .get((req, res) => {
    res.send("User list");
  });

/**
 * /users/new route
 * @date 6/15/2023 - 9:19:21 AM
 */
userRouter.get("/new", (req, res) => {
  res.send("User New Form");
});

/**
 * /users/id route
 * @date 6/15/2023 - 9:19:21 AM
 */
userRouter
  .route("/:id")
  .get((req: CustomRequest, res: Response) => {
    const userID = req.params.id;
    console.log(req.user);
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

const users = [{ name: "Kyle" }, { name: "Sally" }];
//param is a type of middleware. It runs between the request being sent to server and the actual response
userRouter.param("id", (req: CustomRequest, res: Response, next, id) => {
  req.user = users[id];
  console.log(id);
  next(); //runs the next thing in line since params is a middleware
});
