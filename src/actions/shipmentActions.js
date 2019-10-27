import {
    GET_SHIPMENTS,
    UPDATE_SUCCESS,
    SET_LOADING,
    SHIPMENT_ERROR,
} from './types';

export const getShipments = () => async dispatch => {
    try {
        setLoading();
        const result = await fetch('http://localhost:5000/shipments', {
            method: 'GET',
        });
        const data = await result.json();
        console.log('sssss', data);
        dispatch({
            type: GET_SHIPMENTS,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: SHIPMENT_ERROR,
            payload: e.response.data,
        });
    }
};

//AssignShipment
export const assignShipment = ({
    pickupDate,
    deliveryDate,
    orderStatus,
    assign,
    idx,
}) => async dispatch => {
    const body = JSON.stringify({
        pickupDate,
        deliveryDate,
        orderStatus,
        assign,
    });

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'PATCH',
        body,
    };

    try {
        const res = await fetch(
            `http://localhost:5000/shipments/${idx}`,
            config
        );
        const data = await res.json();

        dispatch({
            type: UPDATE_SUCCESS,
            payload: data,
        });
        // getShipments();
    } catch (e) {
        dispatch({
            type: LOGIN_FAIL,
            payload: e.message,
        });
    }
};

export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};
