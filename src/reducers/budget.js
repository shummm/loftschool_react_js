import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes'
import {
    CREATE_ORDER,
    MOVE_ORDER_TO_FARM
} from '../actions/marketTypes'

const initialState = {
    marketExpanse: 0,
    deliveryExpanse: 0,
    profit: 0,
    farmExpanse: 0
};

export default (state = initialState, action) => {

    const { marketExpanse, deliveryExpanse, profit, farmExpanse } = state;

    switch(action.type){
        case CREATE_ORDER:
            return {
                ...state,
                marketExpanse: marketExpanse + 20,
                profit: profit + action.payload.price
            };
        case MOVE_ORDER_TO_FARM:
            return {
                ...state,
                farmExpanse: farmExpanse + 100
            };
        case MOVE_ORDER_TO_CUSTOMER:
            return {
                ...state,
                deliveryExpanse: deliveryExpanse + 20
            };

        default:
            return state
    }
}