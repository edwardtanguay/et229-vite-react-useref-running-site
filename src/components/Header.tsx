import { LoginProps } from "../types";

export const Header = ({ isLoggedIn, setIsLoggedIn }: LoginProps) => {
	return (
		<header className="flex justify-between items-center">
			<h1 className="text-3xl mb-3 text-slate-800">Running Site</h1>
			{isLoggedIn && (
				<button
					onClick={() => {
						setIsLoggedIn(false);
					}}
				>
					Logout
				</button>
			)}
		</header>
	);
};
