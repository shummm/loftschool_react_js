import React from 'react';
import './PersonalForm.css';

export default class PersonalForm extends React.Component {
    state = {
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        email: this.props.email,
    };

    handleChangeForm = (e) => {
        const { onChangeForm } = this.props;

        this.setState({ [e.target.name]: e.target.value});
        onChangeForm(e.target.name, e.target.value);
    };

    render() {
        const { firstName, lastName, email }= this.state;

        return (
            <React.Fragment>
                <h1 className="title">Персональная информация</h1>
                <div className="personal-form">
                    <input onChange={ event => this.handleChangeForm(event) }
                           name="firstName" value={ firstName || ''}
                           placeholder="First name"/>
                    <input onChange={ event => this.handleChangeForm(event) }
                           name="lastName" value={ lastName || ''}
                           placeholder="Last name"/>
                    <input onChange={ event => this.handleChangeForm(event) }
                           name="email" value={ email || ''}
                           placeholder="Email"/>
                </div>
            </React.Fragment>
        )
    }
}