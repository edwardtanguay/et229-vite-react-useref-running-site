import { useState } from "react";
import { Header } from "./components/Header";
import { LoginForm } from "./components/LoginForm";
import { LoggedInPage } from "./components/LoggedInPage";



function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<>
		<div className="lg:mx-[10%]">
			<Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
			{isLoggedIn ? (
				<LoggedInPage />
			) : (
				<LoginForm setIsLoggedIn={setIsLoggedIn} />
			)}</div>
		</>
	);
}

export default App;
