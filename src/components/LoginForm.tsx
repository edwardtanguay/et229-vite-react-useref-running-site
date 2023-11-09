import { useState, useRef } from "react";
import * as config from "../config";

type Props = {
	setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const LoginForm = ({ setIsLoggedIn }: Props) => {
	const [formData, setFormData] = useState(config.initialFormData);
	const [legend, setLegend] = useState(config.initialLegend);
	const inputLoginRef = useRef<HTMLInputElement>(null);
	const inputPasswordRef = useRef<HTMLInputElement>(null);

	const handleFieldChange = (fieldName: string, value: string) => {
		setFormData({
			...formData,
			[fieldName]: value,
		});
		setLegend(config.initialLegend);
	};

	const handleFormSubmit = () => {
		if (formData.login !== config.user.login) {
			setLegend("Login was incorrect");
			if (inputLoginRef.current) {
				inputLoginRef.current.focus();
			}
		} else if (formData.password !== config.user.password) {
			setLegend("Password was incorrect");
			if (inputPasswordRef.current) {
				inputPasswordRef.current.focus();
			}
		} else {
			setIsLoggedIn(true)
		}
	};

	return (
		<fieldset className="border border-gray-500 p-4 w-full rounded bg-slate-300/50">
			<legend className="font-bold">{legend}</legend>

			<div className="mb-4 flex gap-2">
				<label className="w-[5rem]" htmlFor="login">
					Login:
				</label>
				<input
					type="text"
					autoFocus
					ref={inputLoginRef}
					value={formData.login}
					onChange={(e) => handleFieldChange('login', e.target.value)}
					id="login"
				/>
			</div>

			<div className="mb-4 flex gap-2">
				<label className="w-[5rem]" htmlFor="password">
					Password:
				</label>
				<input
					type="password"
					ref={inputPasswordRef}
					value={formData.password}
					onChange={(e) => handleFieldChange('password', e.target.value)}
					id="password"
				/>
			</div>

			<div className="mt-5 flex justify-end pr-3">
				<button onClick={handleFormSubmit}>Time to run!</button>
			</div>
		</fieldset>
	);
};
