/** step1: import express module to create express server */
const express = require("express");
const { chats } = require("./data/data");

/** step2: create instance of express web server,.e app. Which will help to create express api. */
const app = express();

/** select port number where our express server run */
const port = 3000;

/** Create express api, http request methods get() , post(), put(), patch(), delete() */

/** Home page api endpoint = "/" */
app.get("/", (req, res) => {
	res.send("Api is working");
});

/** Get chat data, api endpoint = /api/chat  */
app.get("/api/chat", (req, res) => {
	res.send(chats);
});

/** listen(port, callback) method take  */
app.listen(port, console.log(`server is up and running on ${port}`));
