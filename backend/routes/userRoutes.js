/** Here we write all routes which is related to user */

// import express to create routes
const express = require("express");

// importing controllers
const { registerUser } = require("../controllers/userControllers");

// create instance of express router, using this router create different routes.
const router = express.Router();

// route for user registration with controller registerUser.
// route(endpoint) = endpoint start after this (/api/user) bcz this is use in app.use("/api/user") middleware
// in server.js to using this userRouters logic.
router.route("/").post(registerUser);

// route for user login with authUser controller.
router.post("/login", authUser);

module.exports = router;
