import React, { Component } from 'react'
import {connect} from 'react-redux'
import { moveOrderToCustomer } from '../../actions/farmActions'
import Order from '../Order/Order'
import './Farm.css'

class Farm extends Component {

    getOrders = orders => orders.map(order => {

        return (
            <Order key={order.id} {...order} />
        )
    });

    handleMoveOrderToCustomer = () => {
        const { farm, moveOrderToCustomer } = this.props;

        moveOrderToCustomer(farm.orders[farm.orders.length-1])
    };

    render() {
        const { farm } = this.props;

        return (
            <div className="farm">
                <h2>Производство на ферме</h2>
                <button
                    onClick={this.handleMoveOrderToCustomer}
                    disabled={!farm.orders.length}
                >
                    Отправить урожай клиенту
                </button>
                {!!farm.orders.length && this.getOrders(farm.orders)}
            </div>
        )
    }
}

const mapStateToProps = ({ farm }) => ({
    farm
});

const mapDispatchToProps = {
    moveOrderToCustomer
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Farm)