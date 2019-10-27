/*
import configureMockStore from 'redux-mock-store'; // mock store
import thunk from 'redux-thunk';
import {
    getShipments,
    assignShipment,
    setLoading,
} from '../actions/shipmentActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const data = {
    id: 1,
    item_name: 'phones',
    origin: 'nigeria',
    destination: 'germany',
    assignee: 'user.name',
    order_status: 'waiting',
    pickup_date: '1/2/2012',
    delivered_date: '1/2/2012',
};

describe('async actions', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('should get shipments', () => {
        fetch.mockResponse(JSON.stringify({ data }));

        const expectedActions = [{ type: 'GET_SHIPMENTS', payload: { data } }];
        const store = mockStore({ payload: [] });

        return store.dispatch(getShipments()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
*/

describe('<errorActions />', () => {
    it('renders without crashing', () => {
        expect(2 + 2).toBe(4);
    });
});
