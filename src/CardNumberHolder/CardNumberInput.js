import React from 'react'

export default class CardNumberInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            number: this.format(this.props.cardNumber)
        }
    }

    format = value => {
        if(!value) return '';
        return (''+value).match(/.{1,4}/g).join(" ")
    };

    normalize = value => value.replace(/\s/g, '');

    componentWillReceiveProps({ cardNumber }){
        this.setState({ number: this.format(cardNumber) })
    }

    render(){
        const { onChange } = this.props;
        const { number } = this.state;

        return (
            <input
                value={number}
                onChange={e => onChange(this.normalize(e.target.value))}
            />
        )
    }
}