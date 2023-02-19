import React, { useState } from "react";

import {
	FormControl,
	FormLabel,
	Input,
	Button,
	VStack,
} from "@chakra-ui/react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	/** FUNCTION: username input handler */
	function handleUserEmail(e) {
		setEmail(e.target.value);
	}

	/** FUNCTION: password handler */
	function handlePassword(e) {
		setPassword(e.target.value);
	}

	/** FUNCTION: login handler */
	function handleLogin() {
		console.log("logged in");
	}

	/** FUNCTION: guest user handler */
	function handleGuestUser() {
		setEmail("abc123@gmail.com");
		setPassword("1234567");
	}

	return (
		<VStack>
			{/* Username input */}
			<FormControl id="user-email" isRequired>
				<FormLabel>Email</FormLabel>
				<Input
					type="email"
					placeholder="alok123@gmail.com"
					onChange={handleUserEmail}
				/>
			</FormControl>

			{/* user password input */}
			<FormControl id="login-password" isRequired>
				<FormLabel>password</FormLabel>
				<Input type="password" onChange={handlePassword} />
			</FormControl>

			{/* login button */}
			<Button
				colorScheme="blue"
				width="100%"
				style={{ marginTop: "20px" }}
				onClick={handleLogin}
			>
				Log In
			</Button>

			{/* get guest user credentials */}
			<Button
				colorScheme="red"
				width="100%"
				style={{ marginTop: "20px" }}
				onClick={handleGuestUser}
			>
				Guest User
			</Button>
		</VStack>
	);
};

export default Login;
