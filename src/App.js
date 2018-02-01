import React from 'react';
import PersonalForm from './PersonalForm';
import CardForm from './CardForm';
import Step from './Step';
import './App.css';
import './Step.css';

export default class App extends React.Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: '',
        tabs: [1,2,3],
    };

    handleClickNextForm = () => {
        this.setState(() => {
            return {step: this.state.step + 1}
        });
    };

    handleTabClick = arg => {
        this.setState({step: arg});
    };

    handleChangeForm = (inputName, inputValue) => {
        this.setState({
            [inputName]: inputValue
        });
    };

    isFormCommitTable() {
        if (this.state.step === 1) {
            if (this.state.firstName !== ''
                && this.state.lastName !== ''
                && this.state.email !== ''
                && this.state.email.includes('@')) {
                return true;
            }
        } else if (this.state.step === 2) {
            if (this.state.cardNumber.length === 16) {
                return true;
            }
        }
    }

    renderForm () {
        if (this.state.step === 1) {
            return <PersonalForm firstName = { this.state.firstName }
                          lastName = { this.state.lastName }
                          email = { this.state.email }
                          onChangeForm={ this.handleChangeForm } />
        } else if (this.state.step === 2) {
            return <CardForm cardNumber = { this.state.cardNumber }
                             onChangeForm = { this.handleChangeForm }
                             onChangeTimeOver = { this.handleChangeTimeOver } />
        } else if (this.state.step === 3) {
            return 'Поздравляем!';
        }
    }

    handleChangeTimeOver() {

    }

    render() {
        const { step } = this.state;

        return (
            <div className="container">
                <div className="tab-panel">
                    {this.state.tabs.map((tab, idx) =>
                        <Step key = {idx}
                              number = { tab }
                              onClick = { this.handleTabClick }
                              isSelected = {  step === tab }
                              isClickable = { step >= tab }>
                            {tab === 1 ? 'Personal information'
                                : tab === 2 ? 'Card information'
                                    : 'Finish'}
                        </Step>
                    )}
                </div>
                <div className="form-content">
                    { this.renderForm() }
                </div>
                <div className="button-panel">
                    <button onClick = { this.handleClickNextForm }
                            className="button-next"
                            disabled = { !this.isFormCommitTable() }>Next
                    </button>
                </div>

            </div>
        );
    }
}