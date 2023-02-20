/** if any error happens in this controller than need to control the error.
 * for this purpose use express-async-handler package.
 */
const asyncHandler = require("express-async-handler");

// import user schema/models
const User = require("../schema/userSchema");

/** registerUser controller */
const registerUser = asyncHandler(async (req, res) => {
	// extract the user info from the request body
	const { name, email, password, picture } = req.body;
	// throw error if any required info is undefined.
	if (!name || !email || !password) {
		res.status(400);
		throw new Error("Please enter all the required filed");
	}
	// check user already exits in database or not, use findOne() query in mongoDB to check
	// if user exits in DB than throw error, user already exits
	const userExits = await User.findOne(email);
	if (userExits) {
		throw new Error("User already exits");
	}
	// if user not exits in DB than create user in database using create() query in DB
	const user = await User.create({
		name,
		email,
		password,
		picture,
	});
	// after creating the the user in DB, send response to user along with JWT token.
	if (user) {
		res.status(201).json({
			_id: user._id,
			email: user.email,
			password: user.password,
			picture: user.picture,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error("Failed to create the user");
	}
});

module.exports = { registerUser };
