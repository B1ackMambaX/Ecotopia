import { Component } from "react";

import logo from '../../resources/icons/logo.png';
import './header.scss';

import { Stack, Button } from "@mui/material";

class Header extends Component {
    render() {
        const { onMenuClick, onSignUp, onSignIn, isAuthorized, toProfile } = this.props,
              content = isAuthorized ? 
                        <Button variant="contained" color="warning" onClick={toProfile}>Личный кабинет</Button>
                        : <Buttons onSignIn={onSignIn} onSignUp={onSignUp}/>
        return (
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <img src={logo} alt="logo" className="header__logo logo"/>
                        <nav>
                            <Stack spacing={2} direction={"row"}>
                                <Button color="success" onClick={() => onMenuClick({isMainPage: true, isEvents: false, isArticles: false})}>Главная</Button>
                                <Button color="success" onClick={() => onMenuClick({isMainPage: false, isEvents: false, isArticles: true})}>Статьи</Button>
                                <Button color="success" onClick={() => onMenuClick({isMainPage: false, isEvents:true, isArticles: false})}>Мероприятия</Button>
                                <Button color="success">Отправить обращение</Button>
                            </Stack>
                        </nav>
                        {content}
                    </div>
                </div>
            </header>
        );
    };
};

const Buttons = ({onSignIn, onSignUp}) => {
    return (
        <Stack spacing={2} direction={"row"}>
            <Button onClick={onSignUp} variant="outlined" color="warning">Регистрация</Button>
            <Button onClick={onSignIn} variant="contained" color="success">Войти</Button>
        </Stack>
    );
};

export default Header;