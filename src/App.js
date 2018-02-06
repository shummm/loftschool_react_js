import React, {Component, Fragment} from 'react';
import {Link, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import {addListener, removeListener, isAuthorized} from './AuthorizeApi';
import Home from './Home';
import Public from './Public';
import Private from './Private';
import Auth from './Auth';

class App extends Component {
    state = {
        isAuthorized
    };

    componentDidMount() {
        addListener(this.handleAuthorize);
    }

    componentWillUnmount() {
        removeListener(this.handleAuthorize);
    }

    handleAuthorize = isAuthorized => {
        this.setState({isAuthorized});
    };

    render() {
        const {isAuthorized} = this.state;

        return (
            <Fragment>
                <nav>
                    <ul>
                        <li><Link to='/'>Главная</Link></li>
                        <li><Link to='/public'>Публичная страница</Link></li>
                        <li><Link to='/private'>Секретная страница</Link></li>
                        <li><Link to='/auth'>Войти</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path='/' exact component={ Home }/>
                    <Route path='/public' exact component={ Public }/>
                    {isAuthorized && <Route path='/private' exact component={ Private }/>}
                    {!isAuthorized && <Route path='/auth' exact component={ Auth }/>}

                    {isAuthorized && <Redirect from = '/auth' to = '/' />}
                    {!isAuthorized && <Redirect from = '/private' to = '/auth' />}
                    {!isAuthorized && <Redirect from = '*' to = '/' />}
                </Switch>
            </Fragment>
        )
    }
}

export default App;
