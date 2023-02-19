import React from "react";

// import form components
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";

// Chakra ui components
import {
	Container,
	Box,
	Text,
	Tab,
	Tabs,
	TabPanel,
	TabPanels,
	TabList,
} from "@chakra-ui/react";

const HomePage = () => {
	return (
		<Container maxW="xl" centerContent>
			{/* header of home page */}
			<Box
				display="flex"
				justifyContent="center"
				padding="5px"
				bg="white"
				width="100%"
				margin="40px 0 15px 0"
				borderRadius="2xl"
				borderWidth="1px"
			>
				<Text fontSize="3xl" fontFamily="work sans" color="blackAlpha">
					MESSAGING APP
				</Text>
			</Box>

			{/* login and signup Tabs  */}
			<Box
				bg="white"
				width="100%"
				padding="4px"
				borderRadius="lg"
				borderWidth="1px"
			>
				<Tabs variant="soft-rounded">
					<TabList mb="1em">
						<Tab width="50%">Login</Tab>
						<Tab width="50%">Sign Up</Tab>
					</TabList>
					<TabPanels>
						{/* Login component  */}
						<TabPanel>
							<Login />
						</TabPanel>
						{/* Signup component */}
						<TabPanel>
							<Signup />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</Container>
	);
};

export default HomePage;
