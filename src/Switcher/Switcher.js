import React from 'react';
import  './Switcher.css';

export default class Switcher extends React.Component {
    state = {
        selectedChild: 0
    };

    handleChangeChild = () => {

    };

    render() {

        return (
            <nav>
                <ul className="component-list">
                    <li className="component-list__name"
                        onClick={this.handleChangeChild}
                        data-id="0">VideoPlayer</li>
                    <li className="component-list__name"
                        onClick={this.handleChangeChild}
                        data-id='1'>Card number formating</li>
                    <li className="component-list__name"
                        onClick={this.handleChangeChild}
                        data-id="2">ModalButton</li>
                </ul>
            </nav>
        );
    }
}
