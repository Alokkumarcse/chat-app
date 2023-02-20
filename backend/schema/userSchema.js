/** user schema mainly contain these fields
 * 1. user name
 * 2. email
 * 3. password
 * 4. Profile pictures
 */
const mongoose = require("mongoose");

/** Creating user schema */
const userSchema = mongoose.Schema(
	{
		user: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		picture: {
			type: String,
			required: true,
			default:
				"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
		},
	},
	{ timestamps: true }
);

/** create user model using userSchema */
const User = mongoose.model("user", userSchema);

// export User model
module.exports = User;
