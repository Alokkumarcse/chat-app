/** single chat contains these fields :
 * 1. chat name.
 * 2. isGroupChat.
 * 3. list of users: if single chat than 2 users, if group chat than more than 2 users so make array of users [users].
 * 4. reference of latest message.
 * 5. if groupChat than who is group admin.
 */

/** import mongoose module to create schema in MongoDB */
const mongoose = require("mongoose");

/** Creating chat schema */
const chatSchema = mongoose.Schema(
	{
		chatName: { type: String, trim: true },
		isGroupChat: { type: Boolean, default: false },
		users: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		latestMessage: {
			type: mongoose.Schema.Type.ObjectId,
			ref: "Message",
		},
		groupAdmin: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},

	{
		timeStamps: true,
	}
);

/** Create Chat model using chatSchema */
const Chat = mongoose.model("chat", chatSchema);

/** Export the Chat module */
module.exports = Chat;
