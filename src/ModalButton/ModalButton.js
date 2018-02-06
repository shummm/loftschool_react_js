import React from 'react'
import './ModalButton.css'
import Modal from './Modal'

export default class ModalButton extends React.Component {

    state = {
        isModalShow: false
    };

    hideModal = () => this.setState({ isModalShow: false });

    showModal = () => this.setState({ isModalShow: true });

    render(){

        return (
            <div>
                <button onClick={this.showModal}>Show modal!</button>
                {
                    this.state.isModalShow &&
                    <Modal>
                        <button onClick={this.hideModal}>
                            Close
                        </button>
                    </Modal>
                }
            </div>
        )
    }
}