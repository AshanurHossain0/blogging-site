require("dotenv").config();
import express from 'express';
import cors from 'cors';

import postsRoute from "./routes/posts";
import usersRoute from "./routes/users";
import authRoute from "./routes/auth";

const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());

app.use("/api/posts",postsRoute);
app.use("/api/users",usersRoute);
app.use("/api/auth",authRoute);
app.use("/*",(req:express.Request,res:express.Response)=>{return res.json("INVALID PATH")});

app.listen(port, () => {
  
  return console.log(`Express is listening at port: ${port}`);
  
});