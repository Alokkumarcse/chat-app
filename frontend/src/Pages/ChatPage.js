import React, { useEffect } from "react";
import axios from "axios";

const ChatPage = () => {
	// FUNCTION for data fetching from server
	// const fetchChats = async () => {
	// 	const res = await fetch("http://localhost:5500/api/chat/");
	// 	const data = await res.json();
	// 	console.log(data);
	// };

	//Function for fetching chat data form local host server
	const fetchChats = async () => {
		const res = await axios.get("http://localhost:5500/api/chat");
		console.log(res);
		return res;
	};

	// useEffect hook run when app is run first time
	useEffect(() => {
		fetchChats();
	}, []);

	return <div>ChatPage</div>;
};

export default ChatPage;
