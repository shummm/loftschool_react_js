import {CREATE_ORDER, MOVE_ORDER_TO_FARM} from '../actions/marketTypes';

const initialState = {
    orders: [],
};

export default (state = initialState, action) => {
    const {orders} = state;

    switch (action.type) {
        case CREATE_ORDER: return {
            orders: [
                ...orders,
                action.payload
            ]
        };
        case MOVE_ORDER_TO_FARM:

            return {
                orders: orders.filter( ({ id }) => id !== action.payload.id)
        };
        default: return state;
    }
}

