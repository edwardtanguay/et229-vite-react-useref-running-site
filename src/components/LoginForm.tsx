import { useState } from "react";
import * as config from "../config";

export const LoginForm = () => {
	const [formData, setFormData] = useState(config.initialFormData);

	const handleLoginChange = (login: string) => {
		const _formData = structuredClone(formData);
		_formData.login = login;
		setFormData(_formData);
	};

	const handlePasswordChange = (password: string) => {
		const _formData = structuredClone(formData);
		_formData.password = password;
		setFormData(_formData);
	};

	const handleFormSubmit = () => {
		alert(JSON.stringify(formData, null, 2))
	}

	return (
		<fieldset className="border border-gray-500 p-4 w-full rounded bg-slate-300/50">
			<legend className="font-bold">Welcome</legend>

			<div className="mb-4 flex gap-2">
				<label className="w-[5rem]" htmlFor="login">
					Login:
				</label>
				<input
					type="text"
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
