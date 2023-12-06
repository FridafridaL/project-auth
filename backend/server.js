import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import crypto from "crypto";
import dotenv from "dotenv";
import bcrypt from "bcrypt-nodejs";
//import listEndpoints from "express-list-endpoints";
<<<<<<< HEAD
import { User } from "../backend/models/user";
=======
//import { User } from "../backend/models/user";
import { routes } from "../backend/routes/routes";
>>>>>>> 0f58d697d8c1f71689eb568e75c74f864c01b5dc

dotenv.config();

const mongoUrl =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/project-auth";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

<<<<<<< HEAD
// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     unique: true,
//   },
//   email: {
//     type: String,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   accessToken: {
//     type: String,
//     default: () => crypto.randomBytes(128).toString("hex"),
//   },
// });

const authenticateUser = async (req, res, next) => {
  const user = await User.findOne({ accessToken: req.header("Authorization") });
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).json({ loggedOut: true });
  }
};
=======
// const authenticateUser = async (req, res, next) => {
//   const user = await User.findOne({ accessToken: req.header("Authorization") });
//   if (user) {
//     req.user = user;
//     next();
//   } else {
//     res.status(401).json({ loggedOut: true });
//   }
// };

>>>>>>> 0f58d697d8c1f71689eb568e75c74f864c01b5dc
// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());
app.use(routes);
// app.use(express.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//   if (mongoose.connection.readyState === 1) {
//     next();
//   } else {
//     res.status(503).json({ error: "Service unavailable" });
//   }
// });

<<<<<<< HEAD
const listEndpoints = require("express-list-endpoints");

//routes
app.get("/", (req, res) => {
  res.send(listEndpoints(app));
});

app.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password: bcrypt.hashSync(password) });
    await user.save();
    res.status(201).json({ id: user._id, accessToken: user.accessToken });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Could not create user", errors: err.errors });
  }
=======
// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
>>>>>>> 0f58d697d8c1f71689eb568e75c74f864c01b5dc
});
