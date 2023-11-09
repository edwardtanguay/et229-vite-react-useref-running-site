type Props = {
	isLoggedIn: boolean;
	setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const Header = ({ isLoggedIn, setIsLoggedIn }: Props) => {
	return (
		<header className="flex justify-between">
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
