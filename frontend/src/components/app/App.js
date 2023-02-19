import { Route, Switch } from "react-router-dom";

import "../../styles/App.css";

import HomePage from "../../Pages/HomePage";
import ChatPage from "../../Pages/ChatPage";
import Page404 from "../../Pages/Page404";

function App() {
	return (
		<div className="app">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/chats" component={ChatPage} />
				<Route component={Page404} />
			</Switch>
		</div>
	);
}

export default App;
