import React from 'react';
import configureMockStore from 'redux-mock-store'; // mock store
import thunk from 'redux-thunk';
import {
    loadUser,
    register,
    login,
    getBikers,
    logOut,
    tokenConfig,
} from '../actions/authActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const user = { id: 1, name: 'goc', role: 'manager', password: 'password' };

const token = 12345;

describe('Auth actions', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('should load user ', () => {
        console.log('To be continue .......');
    });
});
