import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: 'GET,HEAD,PUT,POST,DELETE'
  })
);


app.use(cookieParser());

export { app };
