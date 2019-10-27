// import jwt_decode from 'jwt-decode';
import { returnErrors } from './errorActions';
import {
    USER_LOADED,
    GET_BIKERS,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from './types';

//Check token & load user
export const loadUser = () => async (dispatch, getState) => {
    // User loading
    dispatch({ type: USER_LOADING });

    try {
        const res = await fetch(
            'http://localhost:5000/users',
            tokenConfig(getState)
        );
        const data = await res.json();
        dispatch({
            type: USER_LOADED,
            payload: data,
        });
    } catch (e) {
        dispatch(returnErrors(e.message, e.status, 'REGISTER_FAIL'));
        dispatch({
            type: AUTH_ERROR,
            payload: e.response,
        });
    }
};

// Register User
export const register = ({
    firstName,
    lastName,
    email,
    role,
    password,
}) => async dispatch => {
    // Request body
    const body = JSON.stringify({ name, email, role, password });
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body,
    };

    try {
        const res = await fetch('http://localhost:8000/register', config);
        const data = await res.json();
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: REGISTER_FAIL,
            payload: e,
        });
    }
};

// Login User
export const login = ({ email, password, role }) => async dispatch => {
    // Request body
    const body = JSON.stringify({ email, password, role });
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body,
    };

    try {
        const res = await fetch('http://localhost:5000/users', config);
        const data = await res.json();

        const { token } = data;

        if (data.status === 401) {
            dispatch(returnErrors(e.message, 'REGISTER_FAIL'));
            dispatch({
                type: LOGIN_FAIL,
                payload: e.message,
            });
        }
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data,
        });
    } catch (e) {
        dispatch(returnErrors(e.message, 'REGISTER_FAIL'));
        dispatch({
            type: LOGIN_FAIL,
            payload: e.message,
        });
    }
};

//Get all bikers
export const getBikers = () => async (dispatch, getState) => {
    console.log('asshole');
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    };
    try {
        const res = await fetch('http://localhost:5000/users/bikers', config);
        const data = await res.json();

        dispatch({
            type: GET_BIKERS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_BIKERS,
            payload: null,
        });
    }
};

// Logout User
export const logOut = () => {
    return {
        type: LOGOUT_SUCCESS,
    };
};

// Setup config/headers and token
export const tokenConfig = getState => {
    // Get token from localstorage
    const token = getState().auth.token;
    console.log(token);
    // Headers
    const config = {
        headers: {
            'Content-type': 'application/json',
        },
        method: 'GET',
    };

    // If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
};
