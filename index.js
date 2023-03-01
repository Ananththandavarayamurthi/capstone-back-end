import express from "express";
import cors from "cors";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import userRoutes from "./routes/UserRoutes.js";
import employee from "./routes/employeeRoutes.js";
import project from "./routes/project.js";
import taskManage from "./routes/taskManage.js";
import calculation from "./routes/calculation.js";

// MiddleWare
app.use(express.json());
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ message: "welcome" });
});

app.use("/projects", project);
app.use("/users", userRoutes);
app.use("/team", employee);
app.use("/task", taskManage);
app.use("/calc", calculation);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server started at ${process.env.PORT || 3001}`);
});
 
