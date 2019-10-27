import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import store from '../../store';
import { loadUser, getBikers } from '../../actions/authActions';
import NavBar from '../Presentation/NavBar';
import Shipments from './Shipments';

function App() {
    useEffect(() => {
        store.dispatch(loadUser());
        store.dispatch(getBikers());
    }, []);
    return (
        <Provider store={store}>
            <NavBar />
            <Shipments />
        </Provider>
    );
}

export default App;
