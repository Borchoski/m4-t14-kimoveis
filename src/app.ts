import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import { usersRouter, loginRouter, categoriesRouter } from "./routers";

const app: Application = express();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/categories", categoriesRouter);

app.use(handleErrors);

export default app;
