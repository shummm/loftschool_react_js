import React from 'react';
import './CardForm.css';

export default class CardForm extends React.Component {
    state = {
        inputText: null,
    };

    handleChangeForm = event => {
        this.setState({inputText: event.target.value});
        this.props.onChangeForm(event.target.name, event.target.value)
    };

    componentWillUnmount() {

    }

    render() {
        const { inputText }= this.state;

        return (
            <React.Fragment>
                <h1 className="title">Номер карты</h1>
                <div className="card-form">
                    <input name="cardNumber" onChange={event => this.handleChangeForm(event)} value={ inputText || '' } placeholder="0000000000000000"/>
                </div>
            </React.Fragment>
        )
    }
}