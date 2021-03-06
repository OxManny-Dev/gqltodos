import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from './mutations/userMutations';
const Login = () => {
	const [ firstNameInput, setFirstNameInput ] = useState('');
	const [ passwordInput, setPasswordInput ] = useState('');
	const [ loginMutation ] = useMutation(LOGIN, {
		onCompleted: data => {
			localStorage.setItem('token', data.login.token);
		}
	});
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '50%'
			}}
		>
			<input
				placeholder='Manny'
				value={firstNameInput}
				onChange={(e) => setFirstNameInput(e.target.value)}
			/>
			<input
				type='password'
				value={passwordInput}
				onChange={(e) => setPasswordInput(e.target.value)}
			/>
			<button
				onClick={async () => {
					await loginMutation({
						variables: {
							firstName: firstNameInput,
							password: passwordInput,
						}
					});
				}}
			>
				Login
			</button>
		</div>
	);
};

export default Login;
