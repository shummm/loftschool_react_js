import React, {Component} from 'react';
import Market from '../Market/Market';
import Farm from '../Farm/Farm';
import Budget from '../Budget/Budget';
import './App.css'

export default class App extends Component {

    render() {

        return (
            <div className='app'>
            <Market />
            <Farm />
            <Budget />
            </div>
        )
    }
}