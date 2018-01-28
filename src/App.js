import React from 'react';
import './App.css';
import './Step.css';

export default class App extends React.Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: ''
    };

    handleClickNextForm = e => {

    };

    handleTabClick = e => {

    };

    handleChangeForm = e => {
        this.setState({})
    };

    isFormCommitTable () {

    }

    render() {
        const { step } = this.state;
        const { firstName } = this.state;
        const { lastName } = this.state;
        const { email } = this.state;
        const { cardNumber } = this.state;

        return (
            <div className="container">
                <div className="tab-panel">
                    <div className="step step-selected " onClick={this.handleTabClick}>
                        <p className="step__number">1</p>
                        <p className="step__title">Personal information</p>
                    </div>
                    <div className="step" onClick={this.handleTabClick}>
                        <p className="step__number">2</p>
                        <p className="step__title">Card information</p>
                    </div>
                    <div className="step" onClick={this.handleTabClick}>
                        <p className="step__number">3</p>
                        <p className="step__title">Finish</p>
                    </div>
                </div>
                <div className="form-content">
                    <div><h1 className="title">Персональная информация</h1>
                        <div onChange={this.handleChange} className="personal-form">
                            <input onChange={this.handleChangeForm} name="firstName" value={firstName}
                                   placeholder="First name"/>
                            <input onChange={this.handleChangeForm} name="lastName" value={lastName}
                                   placeholder="Last name"/>
                            <input onChange={this.handleChangeForm} name="email" value={email} placeholder="Email"/>
                        </div>
                    </div>
                </div>
                <div className="button-panel">
                    <button onClick={this.handleClickNextForm} className="button-next" disabled="">Next</button>
                </div>
            </div>
        );
    }
}