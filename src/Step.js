import React from 'react';
import './Step.css';

export default class Step extends React.Component {

    handleClick = () => {
        const {onClick} = this.props;
        const {number} = this.props;

        if (this.props.isClickable === true) {

            onClick(number);
        }
    };

    render() {
            console.log(this.props);
        return (
            <React.Fragment>
                <div className={this.props.isSelected ? 'step step-selected' : this.props.isClickable ? 'step' : 'step step-clickable'}
                     onClick={() => this.handleClick()}>
                    <p className="step__number">{this.props.number}</p>
                    <p className="step__title">{this.props.children}</p>
                </div>
            </React.Fragment>
        )
    }
}