import express, { NextFunction, Request, Response } from "express";
import { userRouter } from "./routes/users";

const app = express(); //sets up the actual server

app.set("view engine", "ejs"); //sets up view engine

app.use(logger); //use the middleware define below. Will be used everywhere since you defined it at the top

/**
 * @date 6/15/2023 - 8:01:59 AM
 * When someone makes a get request to this route, it sends Hi
 * Url would be localhost/.  Parameters are (path, function). Also passed middleware logger
 */
app.get("/", logger, (req: Request, res: Response) => {
  console.log("object");
  res.render("index", { text1243: "World" }); //passing info to our ejs file
  // res.download('server.ts') download a file
  // res.status(500).json({ message: "Error"}) //Internal server error (code 500) and json code with it
  // res.status(500).send("Hi") //Internal server error (code 500) and unqie message with it
  // res.send("Hi") //very generic. Not used very often but good for testing purposes
});

app.use("/users", userRouter);

//Middleware function
function logger(req: Request, res: Response, next: NextFunction) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
