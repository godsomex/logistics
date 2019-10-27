import {
    GET_SHIPMENTS,
    UPDATE_SUCCESS,
    SET_LOADING,
    SHIPMENT_ERROR,
} from '../actions/types';

const initialState = {
    loading: false,
    error: null,
    shipments: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SHIPMENTS:
            return {
                ...state,
                loading: false,
                shipments: action.payload,
            };

        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };

        case UPDATE_SUCCESS:
            return {
                ...state,
                ...action.payload,
                loading: false,
                // shipments: action.payload
            };

        case SHIPMENT_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
};
