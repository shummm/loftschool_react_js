import React from 'react';
import './App.css';
import './Step.css';

export default class App extends React.Component {

    state = {
        user: {
            firstName: '',
            lastName: '',
            email: ''
        }
    };
    confirmEmail = '';

    handleChange(e) {
        this.setState({
            user: {
                firstName: () => {
                    if (e.target.name === 'firstName') {
                        this.setState({user: {firstName: e.target.value}});
                    }
                },
                lastName: () => {
                    if (e.target.name === 'lastName') {
                        this.setState({user: {lastName: e.target.value}});
                    }
                },
                email: () => {
                    if (e.target.name === 'email') {
                        this.confirmEmail = e.target.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
                        this.setState({user: {email: this.confirmEmail}});
                    }
                }
            }
        });
    }

    // if (e.target.name === 'lastName') {
    //     this.setState({user: {lastName: e.target.value}});
    // }
    // if (e.target.name === 'email') {
    //     this.confirmEmail = e.target.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
    //     this.setState({user: {email: this.confirmEmail}});
    // }


    // console.log(this.state.user.firstName);
    // };

    // handleChangeFirst = e => {
    //     this.setState({user: {firstName: e.target.value}});
    //
    //     console.log(this.state);
    // };
    //
    // handleChangeLast = e => {
    //     this.setState({user: {lastName: e.target.value}});
    //     console.log(this.state);
    // };
    //
    // handleChangeEmail = e => {
    //     this.setState({user: {email: e.target.value}});
    //     console.log(this.state);
    // };

    render() {
        const {firstName} = this.state;
        const {lastName} = this.state;
        const {email} = this.state;

        return (
            <div className="container">
                <div className="tab-panel">
                    <div className="step step-selected ">
                        <p className="step__number">1</p>
                        <p className="step__title">Personal
                            information
                        </p>
                    </div>
                    <div className="step"><p className="step__number">2</p><p className="step__title">Card
                        information</p>
                    </div>
                    <div className="step"><p className="step__number">3</p><p className="step__title">Finish</p>
                    </div>
                </div>
                <div className="form-content">
                    <div><h1 className="title">Персональная информация</h1>
                        <div onChange={this.handleChange} className="personal-form">
                            <input onChange={this.handleChangeFirst} name="firstName" value={firstName}
                                   placeholder="First name"/>
                            <input onChange={this.handleChangeLast} name="lastName" value={lastName}
                                   placeholder="Last name"/>
                            <input onChange={this.handleChangeEmail} name="email" value={email} placeholder="Email"/>
                        </div>
                    </div>
                </div>
                <div className="button-panel">
                    <button className="button-next" disabled="">Next</button>
                </div>
            </div>
        );
    }
}