import React, { useState } from "react";

import {
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	VStack,
	InputRightElement,
	Button,
} from "@chakra-ui/react";

const Signup = () => {
	/** Create different state for handling the different inputs */
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [picture, setPicture] = useState("");
	const [isVisible, setVisible] = useState(false);

	/** FUNCTION: handle username input */
	function handleUsernameInput(e) {
		setName(e.target.value);
	}

	/** FUNCTION: handle email input */
	function handleEmailInput(e) {
		setEmail(e.target.value);
	}

	/** FUNCTION: handle password input */
	function handlePasswordInput(e) {
		setPassword(e.target.value);
	}

	/** FUNCTION: show and hide the password */
	function isPasswordVisible() {
		setVisible(!isVisible);
	}

	/** FUNCTION: get profile picture */
	function getPicture(e) {
		const pic = e.target.files[0];
		setPicture(pic);
	}

	/** FUNCTION: submit handler */
	function submitHandler() {
		console.log("submit");
	}

	return (
		<VStack>
			{/* user name */}
			<FormControl id="first-name" isRequired>
				<FormLabel>Username</FormLabel>
				<Input
					type="text"
					placeholder="Username"
					onChange={handleUsernameInput}
				/>
			</FormControl>

			{/* user email */}
			<FormControl id="email" isRequired>
				<FormLabel>Email</FormLabel>
				<Input type="email" placeholder="Email" onChange={handleEmailInput} />
			</FormControl>

			{/* user password */}
			<FormControl id="password" isRequired>
				<FormLabel>password</FormLabel>
				<InputGroup>
					<Input
						type={isVisible ? "text" : "password"}
						onChange={handlePasswordInput}
					/>
					<InputRightElement width="4.5rem">
						<Button height="1.75rem" size="sm" onClick={isPasswordVisible}>
							{isVisible ? "Hide" : "Show"}
						</Button>
					</InputRightElement>
				</InputGroup>
			</FormControl>

			{/* confirm password */}
			<FormControl id="confirm-password" isRequired>
				<FormLabel>Confirm password</FormLabel>
				<InputGroup>
					<Input
						type={isVisible ? "text" : "password"}
						onChange={handlePasswordInput}
					/>
					<InputRightElement width="4.5rem">
						<Button height="1.75rem" size="sm" onClick={isPasswordVisible}>
							{isVisible ? "Hide" : "Show"}
						</Button>
					</InputRightElement>
				</InputGroup>
			</FormControl>

			{/* user profile picture */}
			<FormControl id="picture">
				<FormLabel>Upload your picture</FormLabel>
				<Input
					type="file"
					accept="image/*"
					padding="2px"
					onChange={getPicture}
				/>
			</FormControl>

			{/* Submit button */}
			<Button
				colorScheme="blue"
				width="100%"
				style={{ marginTop: "20px" }}
				onClick={submitHandler}
			>
				Sign up
			</Button>
		</VStack>
	);
};

export default Signup;
