import React, {Component, Fragment} from 'react';
import './Auth.css';
import { Redirect } from 'react-router-dom';
import { authorizeUser } from './AuthorizeApi'


export default class FormAuth extends Component {

    state = {
        email: null,
        password: null,
        error: false,
        isAuthorized: false,
    };

    handleInputChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = () => {
        const { email, password } = this.state;
        const isAuthorized = authorizeUser(email, password);

        this.setState({
            isAuthorized,
            error: !isAuthorized,
        });
    };

    render() {
        const {isAuthorized, email, password, error} = this.state;

        return (
            <Fragment>
                {isAuthorized && <Redirect to='/'/>}
                <h3>Sign in</h3>
                <hr/>
                <input onChange={this.handleInputChange}
                       type='text'
                       id='email'
                       name='email'
                       placeholder='email'
                       value={email || ''}/>
                <input onChange={this.handleInputChange}
                       type='password'
                       id='password'
                       name='password'
                       placeholder='password'
                       value={password || ''}/>
                <hr/>
                {error && <p className='error'>Неверный пароль и/или почта.</p>}
                <button id='SignIn' onClick={this.handleSubmit}>Sign in</button>
            </Fragment>
        )
    }
}