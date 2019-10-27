import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getBikers } from '../../actions/authActions';
import { assignShipment } from '../../actions/shipmentActions';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Input,
} from 'reactstrap';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import DayJS from 'react-dayjs';

function ShipmenItem(
    {
        ship: {
            _id,
            item_name,
            order_status,
            assignee,
            pickup_date,
            delivered_date,
            origin,
            destination,
        },
        auth: { bikers, user },
        assignShipment,
    },
    props
) {
    const { buttonLabel, className } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const closeBtn = (
        <button className="close" onClick={toggle}>
            &times;
        </button>
    );

    const [isEditing, setIsEditing] = useState(false);
    const [idx, setId] = useState(null);
    const openEditForm = id => {
        setIsEditing(true);
        setId(id);
    };

    const [formData, setFormData] = useState({
        pickupDate: '',
        deliveryDate: '',
        orderStatus: '',
        assign: '',
    });

    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

    const { pickupDate, deliveryDate, orderStatus, assign } = formData;

    const onSubmit = e => {
        e.preventDefault();
        const assignUser = {
            pickupDate,
            deliveryDate,
            orderStatus,
            assign,
            idx,
        };
        assignShipment(assignUser);
    };

    return (
        <div>
            <ItemStyles onClick={toggle}>
                <li className="table-row" onClick={() => openEditForm(_id)}>
                    <div className="cols cols-2" data-label="item Id">
                        12345
                    </div>
                    <div className="cols cols-2" data-label="item Name">
                        {item_name}
                    </div>
                    <div className="cols cols-2" data-label="Assigned to">
                        {assignee}
                    </div>
                    <div className="cols cols-2" data-label="Order Status">
                        {order_status}
                    </div>
                    <div className="cols cols-2" data-label="Pickup Date">
                        {pickup_date}
                    </div>
                    <div className="cols cols-2" data-label="Delivery Date">
                        {delivered_date}
                    </div>
                    <div className="cols cols-2" data-label="origin">
                        {origin}
                    </div>
                    <div className="cols cols-2" data-label="Destination">
                        {destination}
                    </div>
                </li>
            </ItemStyles>

            <Modal isOpen={modal} toggle={toggle} className={className}>
                <form className="col s12" onSubmit={onSubmit}>
                    <ModalHeader toggle={toggle} close={closeBtn}>
                        Update Shipment
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Input
                                type="datetime-local"
                                value={pickupDate}
                                name="pickupDate"
                                onChange={e => updateFormData(e)}
                            />
                            <Input
                                type="datetime-local"
                                value={deliveryDate}
                                name="deliveryDate"
                                onChange={e => updateFormData(e)}
                            />

                            {isEditing && user.role === 'manager' ? (
                                <>
                                    <select
                                        name="assign"
                                        onChange={e => updateFormData(e)}
                                    >
                                        <option value="selectBiker">
                                            {' '}
                                            Assign a Biker
                                        </option>
                                        ;
                                        {bikers.map((item, i) => {
                                            return (
                                                <option
                                                    key={i}
                                                    value={item.name}
                                                >
                                                    {item.name}
                                                </option>
                                            );
                                        })}
                                    </select>

                                    <select
                                        name="orderStatus"
                                        onChange={e => updateFormData(e)}
                                    >
                                        <option defaultValue="choose">
                                            Select
                                        </option>
                                        <option value="waiting">Waiting</option>
                                        <option value="assigned">
                                            Assigned
                                        </option>
                                        <option value="picked">
                                            Picked up
                                        </option>
                                        <option value="delivered">
                                            Delivered
                                        </option>
                                    </select>
                                </>
                            ) : (
                                'Update only Pick Up and Delivery Date '
                            )}
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={toggle}
                            type="submit"
                            name="action"
                        >
                            Update
                        </Button>{' '}
                        <Button color="secondary" onClick={toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </form>
            </Modal>
        </div>
    );
}

ShipmenItem.propTypes = {
    ship: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(
    mapStateToProps,
    { getBikers, assignShipment }
)(ShipmenItem);

const ItemStyles = styled.a`
    color: #000000;

    &:hover {
        cursor: pointer;
        color: blue;
    }
`;
