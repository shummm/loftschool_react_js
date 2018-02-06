import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './ModalButton.css'

export default class Modal extends Component {

    modal = () => (
        <div className="modal">
            <div className="modal__fog">
                <div className="modal__body">
                    <h1>Модальное окно!</h1>
                    {this.props.children}
                </div>
            </div>
        </div>
    );

    render(){
        return ReactDOM.createPortal(this.modal(), document.querySelector('#portal'))
    }
}