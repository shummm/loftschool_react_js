import React, {Component} from 'react';
import './Market.css';
import Order from '../Order/Order';
import {createOrder, moveOrderToFarm} from '../../actions/marketActions';
import {connect} from 'react-redux';

let id = 0;
const getId = () => {
    id += 1;
    return id;
};
export const vegetables = [
    'Капуста',
    'Редиска',
    'Огурцы',
    'Морковь',
    'Горох',
    'Баклажан',
    'Тыква',
    'Чеснок',
    'Лук',
    'Перец',
    'Картофель',
    'Редька'
];

const getNewOrder = () => {
    return {
        id: getId(),
        name: vegetables[Math.floor(Math.random() * vegetables.length)],
        price: 100 + Math.floor(Math.random() * 100),
        createdAt: new Date()
    };
};

export class Market extends Component {

    handleMoveOrderToFarm = () => {
        const { market, moveOrderToFarm } = this.props;

        moveOrderToFarm(market.orders[market.orders.length-1]);
    };


    orderList = (orders) => orders.map(order => {

        return (
            <Order key = {order.id} {...order} />
        )
    });

    render() {
        const {market, createOrder} = this.props;

        return (
            <div className='market'>
                <h2>Новые заказы в магазине</h2>
                <button onClick={() => createOrder(getNewOrder())}>Создать заказ</button>
                <button onClick={this.handleMoveOrderToFarm}
                        disabled={!market.orders.length}>Отправить заказ на ферму</button>
                <div className="order-list">
                    {!!market.orders.length && this.orderList(market.orders)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({market}) => ({
    market
});

const mapDispatchToProps = dispatch =>
({
    createOrder: (newOrder) => dispatch(createOrder(newOrder)),
    moveOrderToFarm: (order) => dispatch(moveOrderToFarm(order))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Market);
