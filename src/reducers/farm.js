import {MOVE_ORDER_TO_FARM} from "../actions/marketTypes";

import {MOVE_ORDER_TO_CUSTOMER} from "../actions/farmTypes";

const initialState = {
    orders: [],
};

export default (state = initialState, action) => {
    const {orders} = state;

    switch (action.type) {
        case MOVE_ORDER_TO_FARM:

            return {
                orders: [
                    ...orders,
                    action.payload
                ]
            };
        case MOVE_ORDER_TO_CUSTOMER:
            return {
                orders: orders.filter(({id}) => id !== action.payload.id),
            };

        default:
            return state
    }
}