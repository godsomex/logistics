import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'reactstrap';
import { connect, useSelector, useDispatch } from 'react-redux';
import ShipmenItem from './ShipmenItem';
import { getShipments } from '../../actions/shipmentActions';
import { TableStyles } from '../../styles/styles';

function Shipments() {
    const { shipment, auth } = useSelector(state => state);
    const { loading, shipments, error } = shipment;
    const [ship, setShip] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadShip = async () => {
            await dispatch(getShipments());
            setShip(shipments);
        };
        loadShip();
    }, [ship]);

    if (loading) {
        return <Spinner style={{ width: '3rem', height: '3rem' }} />;
    }

    if (auth.token) {
        return (
            <Container>
                <TableStyles>
                    <div className="contain">
                        <ul className="responsive-table">
                            <li className="table-header">
                                <div className="cols cols-1">Id</div>
                                <div className="cols cols-2">Shipment Name</div>
                                <div className="cols cols-3">Assignee</div>
                                <div className="cols cols-4">Order Status</div>
                                <div className="cols cols-4">Pickup Date</div>
                                <div className="cols cols-4">Delivery Date</div>
                                <div className="cols cols-4">Origin</div>
                                <div className="cols cols-4">Destination</div>
                            </li>
                            {!loading && ship.length === 0 ? (
                                <div> no shipments to display</div>
                            ) : (
                                ship.map(shipm => (
                                    <ShipmenItem key={shipm.id} ship={shipm} />
                                ))
                            )}
                        </ul>
                    </div>
                </TableStyles>
            </Container>
        );
    } else {
        return <div>please login or signup </div>;
    }
}

export default Shipments;

//styles
