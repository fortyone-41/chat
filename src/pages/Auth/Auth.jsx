import React from 'react';
import './Auth.scss'
import { LoginForm } from '../../modules/index';
import { Route } from 'react-router-dom'

const Auth = ({ onLogin, socket, room }) => {
    return (
        <section className="auth">
            <div className="auth__content">
                <Route exact path={["/", "/login"]} render={(props) => <LoginForm onLogin={onLogin} socket={socket} room={room} />} />
            </div>
        </section>
    );
}


export default Auth;
