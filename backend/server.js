/** step1: import express module to create express server */
const express = require("express");

/** step2: create instance of express web server */
const app = express();

// select port number where express server run
const port = 8000;

/** listen(port, callback) method take  */
app.listen(port, console.log(`server is up and running on ${port}`));
