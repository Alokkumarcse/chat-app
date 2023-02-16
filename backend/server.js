/** step1: import express module to create express server */
const express = require("express");

/** step2: create instance of express which is create an web server
 * and user can interact with web browser.
 * web application is underlying part of web server which is process the user request come through web server and
 * return the response to web server and webserver return response to user's browser.
 */
const app = express();

// select port number where express server run
const port = 8000;

/** server home router */
app.get("/", (req, res) => {
	return res("Hello Express");
});

/** listen(port, callback) method take  */
app.listen(port, console.log(`server is up and running on ${port}`));
