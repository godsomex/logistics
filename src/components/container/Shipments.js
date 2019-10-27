import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { connect, useSelector, useDispatch } from 'react-redux';
import ShipmenItem from './ShipmenItem';
import { getShipments } from '../../actions/shipmentActions';
import { Container } from 'reactstrap';

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
        return <div>... loading Shipments</div>;
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
const TableStyles = styled.div`
    .contain {
        max-width: 1500px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 10px;
        padding-right: 10px;
    }

    h2 {
        font-size: 26px;
        margin: 20px 0;
        text-align: center;
        small {
            font-size: 0.5em;
        }
    }

    .responsive-table {
        li {
            border-radius: 3px;
            padding: 25px 30px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 25px;
        }
        .table-header {
            background-color: #95a5a6;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.03em;
        }
        .table-row {
            background-color: #ffffff;
            box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
        }
        .cols-1 {
            flex-basis: 10%;
        }
        .cols-2 {
            flex-basis: 40%;
        }
        .cols-3 {
            flex-basis: 25%;
        }
        .cols-4 {
            flex-basis: 25%;
        }

        @media all and (max-width: 767px) {
            .table-header {
                display: none;
            }
            .table-row {
            }
            li {
                display: block;
            }
            .cols {
                flex-basis: 100%;
            }
            .cols {
                display: flex;
                padding: 10px 0;
                &:before {
                    color: #6c7a89;
                    padding-right: 10px;
                    content: attr(data-label);
                    flex-basis: 50%;
                    text-align: right;
                }
            }
        }
    }
`;
