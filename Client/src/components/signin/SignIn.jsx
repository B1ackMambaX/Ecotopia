import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import logo from '../../resources/icons/logo.png';
import { Component } from "react";
import axios from "axios";


class SignIn extends Component {
	state = {
		email: null, 
		password: null
	};

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSignIn = async () => {
		const {onFinishedSignIn} = this.props;
		const { email, password } = this.state;
		try {
			await axios.post('http://localhost:8000/api/auth/login', {
				email,
				password
			}, {headers: {'Content-Type': 'application/json'}})
			.then(response => response.data)
			.then(({firstName, secondName, email}) => onFinishedSignIn(firstName, secondName, email))
			.catch(e => {
				if (e.code === 'ERR_BAD_REQUEST') {
					alert('Неверный email или пароль!');
				}
			});
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
                    <img src={logo} alt="Logo" className="logo" />
					<Typography component="h1" variant="h5">
						Вход
					</Typography>
					<Box component="form" onSubmit={(e) => e.preventDefault()} noValidate sx={{ mt: 1 }}>
						<TextField onChange={this.onValueChange} margin="normal" required fullWidth id="email" label="Email" name="email" autoComplete="email" autoFocus />
						<TextField onChange={this.onValueChange} margin="normal" required fullWidth name="password" label="Пароль" type="password" id="password" autoComplete="current-password" />
						<Button onClick={this.onSignIn} color="success" type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
							Войти
						</Button>
					</Box>
				</Box>
			</Container>
		);
	}
}
export default SignIn;
