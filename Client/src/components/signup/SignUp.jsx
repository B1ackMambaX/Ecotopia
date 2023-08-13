import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import logo from "../../resources/icons/logo.png";

class SignUp extends React.Component {
    state = {
        firstName: null,
        lastName: null,
        email: null,
        password: null
    };

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    formReset = (e) => {
        e.preventDefault();
        e.target.reset();
    };

    onSignUp = async () => {
        const {firstName, lastName, email, password} = this.state;
        try {
            await axios.post('http://localhost:8000/api/auth/registration', {
                email,
                password,
                name: firstName,
                surname: lastName
            }, {headers: {'Content-Type': 'application/json'}})
            .then(response => console.log(response))
        } catch (e) {
            if(e.response.status) {
                alert('Данный email занят');
                return;
            }
        }
        this.props.onFinishedSignUp();
    };

	render() {
        return (
            <>
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
                        <img src={logo} alt="logo" className="logo" />
                        <Typography component="h1" variant="h5">
                            Регистрация
                        </Typography>
                        <Box component="form" noValidate={false} onSubmit={this.formReset}sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField onChange={this.onValueChange} autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="Имя" autoFocus />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField onChange={this.onValueChange} required fullWidth id="lastName" label="Фамилия" name="lastName" autoComplete="family-name" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField onChange={this.onValueChange} required fullWidth id="email" label="Ваш email" name="email" autoComplete="email" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField onChange={this.onValueChange} required fullWidth name="password" label="Ваш пароль" type="password" id="password" autoComplete="new-password" />
                                </Grid>
                            </Grid>
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} color="success" onClick={this.onSignUp}>
                                Зарегистрироваться
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </>
        );
    }
};

export default SignUp;
