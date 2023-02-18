const mongoose = require("mongoose");

/** for creating message schema mainly three field required
 * 1. sender_name or sender_id
 * 2. content of message
 * 3. reference of chat/user, which is belongs to the this message
 */

const messageSchema = mongoose.Schema(
	{
		sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
		content: { type: String, trim: true },
		chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
	},
	{ timestamps: true }
);

// crate Message model using messageSchema
const Message = mongoose.model("message", messageSchema);

// export Message model
module.exports = Message;
