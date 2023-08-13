import { Component } from "react";

import Header from '../header/Header';
import Promo  from '../promo/Promo';
import Features from "../features/Features";
import Footer from "../footer/footer";
import Events from "../events/Events";
import Articles from "../articles/articles";
import SignUp from "../signup/SignUp";
import SignIn from '../signin/SignIn';
import Profile from "../profile/Profile";

class App extends Component {
    state = {
        isMainPage: true,
        isEvents: false,
        isArticles: true,
        isSigningUp: false,
        isSigningIn: false,
        authorized: false,
        user: null,
        isProfile: false
    };


    onMenuClick = (obj) => {
        this.setState(obj);
    };

    onFinishedSignUp = () => {
        this.setState({
            isSigningUp: false
        });
    };

    onStartingSignUp = () => {
        this.setState({
            isSigningUp: true
        });
    };

    onStartingSignIn = () => {
        this.setState({
            isSigningIn: true
        });
    };

    onFinishedSignIn = (firstName, lastName, email) => {
        this.setState({
            isSigningIn: false,
            authorized: true,
            user: {
                firstName,
                lastName,
                email
            }
        });
    };

    onOpenProfile = () => {
        this.setState({
            isProfile: true,
            isEvents: false,
            isMainPage: false
        });
    };

    render() {
        const { isMainPage, isEvents, isArticles, isSigningUp, isSigningIn, authorized, user, isProfile } = this.state,
              signUp = isSigningUp ? <SignUp onFinishedSignUp={this.onFinishedSignUp}/> : null,
              signIn = isSigningIn ? <SignIn onFinishedSignIn={this.onFinishedSignIn}/> : null;
        return (
            <>
                {signUp || signIn || <View isMainPage={isMainPage} isEvents={isEvents} isArticles={isArticles} onMenuClick={this.onMenuClick} onSignUp={this.onStartingSignUp} onSignIn={this.onStartingSignIn} isAuthorized={authorized} onOpenProfile={this.onOpenProfile} user={user} isProfile={isProfile}/>}
            </>
        );
    };
};

const View = ({isMainPage, isEvents, isArticles, onMenuClick, onSignUp, onSignIn, isAuthorized, onOpenProfile, isProfile, user}) => {
    const mainPage = isMainPage ? <><Promo/><Features/></> : null,
          eventsPage = isEvents ? <Events isAuthorized={isAuthorized} user={user}/> : null,
          articlesPage = isArticles ? <Articles/> : null,
          profile = isProfile ? <Profile user={user}/> : null;
    return (
            <>
                <Header onMenuClick={onMenuClick} onSignUp={onSignUp} onSignIn={onSignIn} isAuthorized={isAuthorized} toProfile={onOpenProfile}/>
                <main>
                    {mainPage || eventsPage || profile || articlesPage}
                </main>
                <Footer/>
            </>
    );
};

export default App;