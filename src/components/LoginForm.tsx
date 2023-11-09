import { useState, useRef } from "react";
import * as config from "../config";

export const LoginForm = () => {
	const [formData, setFormData] = useState(config.initialFormData);
	const [legend, setLegend] = useState(config.initialLegend);
	const inputLoginRef = useRef<HTMLInputElement>(null);
	const inputPasswordRef = useRef<HTMLInputElement>(null);

	const handleLoginChange = (login: string) => {
		const _formData = structuredClone(formData);
		_formData.login = login;
		setFormData(_formData);
		setLegend(config.initialLegend)
	};

	const handlePasswordChange = (password: string) => {
		const _formData = structuredClone(formData);
		_formData.password = password;
		setFormData(_formData);
		setLegend(config.initialLegend)
	};

	const handleFormSubmit = () => {
		if (formData.login !== config.user.login) {
			setLegend("Login was incorrect");
			if (inputLoginRef.current) {
				inputLoginRef.current.focus();
			}
		} else if(formData.password !== config.user.password) {
			setLegend("Password was incorrect");
			if (inputPasswordRef.current) {
				inputPasswordRef.current.focus();
			}
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
					onChange={(e) => handleLoginChange(e.target.value)}
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
					onChange={(e) => handlePasswordChange(e.target.value)}
					id="password"
				/>
			</div>

			<div className="mt-5 flex justify-end pr-3">
				<button onClick={handleFormSubmit}>Time to run!</button>
			</div>
		</fieldset>
	);
};
