/** This file is responsible for connecting to database  */

const mongoose = require("mongoose");

/** crate a function whose connect to the database */
const connectDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`MongoDB connected: ${connection.connection.host}`.blue.underline);
	} catch (error) {
		console.log(`connection error: ${error.message}`.red.bold);
		process.exit();
	}
};

module.exports = connectDB;
