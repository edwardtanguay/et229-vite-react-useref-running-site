import { useState, useRef, FormEvent } from "react";
import * as config from "../config";
import { LoginProps } from "../types";

type FormProps = Pick<LoginProps, "setIsLoggedIn">;

export const LoginForm = ({ setIsLoggedIn }: FormProps) => {
	const [formData, setFormData] = useState(config.initialFormData);
	const [legend, setLegend] = useState(config.initialLegend);
	const inputLoginRef = useRef<HTMLInputElement>(null);
	const inputPasswordRef = useRef<HTMLInputElement>(null);

	const handleFieldChange = (fieldName: string, value: string) => {
		setFormData({
			...formData,
			[fieldName]: value,
		});
	};

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
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
			setIsLoggedIn(true);
		}
	};

	return (
		<form onSubmit={(e) => handleFormSubmit(e)}>
			<fieldset className="flex flex-col md:flex-row gap-6 rounded-lg bg-slate-500/50 p-5 md:pb-10">
				<legend>{legend}</legend>
				<div className="md:w-2/5">
					<label
						className="block mb-2 text-sm font-medium text-gray-900"
						htmlFor="login"
					>
						Login:
					</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
						type="text"
						autoFocus
						ref={inputLoginRef}
						value={formData.login}
						onChange={(e) =>
							handleFieldChange("login", e.target.value)
						}
						id="login"
					/>
				</div>

				<div className="md:w-2/5">
					<label
						className="block mb-2 text-sm font-medium text-gray-900"
						htmlFor="password"
					>
						Password:
					</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 "
						type="password"
						ref={inputPasswordRef}
						value={formData.password}
						onChange={(e) =>
							handleFieldChange("password", e.target.value)
						}
						id="password"
					/>
				</div>

				<button className="place-self-end md:w-1/5">Time to run!</button>
			</fieldset>
		</form>
	);
};
