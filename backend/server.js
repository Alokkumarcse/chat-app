/** step1: import express module to create express server */
const express = require("express");
const cors = require("cors");
const color = require("colors");

const userRoutes = require("./routes/userRoutes");

/** import connectDB() from config to connect the database */
const connectDB = require("./config/db");

/** include dotenv file to hide sensitive data  and manage the constant across the project*/
const dotenv = require("dotenv");
dotenv.config();

/** invoke the connectDB() method */
connectDB();

/** importing dummy chat data file */
const { chats } = require("./data/data");

/** step2: create instance of express web server,i.e app. Which will help to create express api, middleware etc. */
const app = express();

/** enable cross-origin-resource-sharing (cors) using cors() middleware library
 * and allow the all, specific origin to access the resource.
 */
app.use(
	cors({
		origin: "http://localhost:3000",
	})
);

/** Create express api, http request methods get() , post(), put(), patch(), delete() */
/** Home page api endpoint = "/" */
app.get("/", (req, res) => {
	res.send("Api is working");
});

/** Get chat data, api endpoint = /api/chat  */
app.get("/api/chat", (req, res) => {
	res.send(chats);
});

/** Get single chat data, api endpoint = /api/chat/id */
app.get("/api/chat/:id", (req, res) => {
	// console.log(req.params.id);
	const singleChat = chats.find((chat) => chat._id === req.params.id) || null;
	singleChat ? res.send(singleChat) : res.send("Data not found");
});

/** using user routes to communicate with DB */
app.use("/api/user", userRoutes);

/** select port number where our express server run */
const PORT = process.env.PORT || 5000;
/** listen(port, callback) method take  */
app.listen(
	PORT,
	console.log(`server is up and running on ${PORT}`.yellow.bold)
);
