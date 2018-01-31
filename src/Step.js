import React from 'react';
import './Step.css';

export default class Step extends React.Component {

    state = {
        AttrClassValue: this.props.isSelected === true ? 'step step-selected' : 'step step-clickable' ,
    };


    handleClick = event => {
        const {onClick} = this.props;
        const {number} = this.props;
        const selected = 'step step-selected';
        const clickable = 'step step-clickable';

        // onClick(number);


        if (this.props.isClickable === true) {
            onClick(number);
        }

        if (this.props.isSelected === true) {
            console.log('ok');
            if (this.props.number === event.target.textContent) {
                console.log('ok');
                this.setState({AttrClassValue: selected});
            }
        } else if (this.props.isSelected === false) {
            this.setState({AttrClassValue: clickable});
        }
        console.log(this.state);
    };



    render() {

        return (
            <React.Fragment>
                <div className={ this.state.AttrClassValue }
                     onClick={ event => this.handleClick(event) }>
                    <p className="step__number">{ this.props.number }</p>
                    <p className="step__title">{ this.props.children }</p>
                </div>
            </React.Fragment>
        )
    }
}