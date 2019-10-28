const express = require('express');
const router = express.Router();
const auth = require('./authMiddleware');

//import Shipment Model
const Shipment = require('../models/Shipment');

// @route   GET /shipments
// @desc    Get All Shipments
// @access  Public
router.get('/', (req, res) => {
    Shipment.find()
        .sort({ item_name: -1 })
        .then(items => res.json(items));
});

// @route   POST /shipments
// @desc    Create A Shipment
// @access  Public
router.post('/', (req, res) => {
    const newShipment = new Shipment({
        item_name: req.body.item_name,
        origin: req.body.origin,
        destination: req.body.destination,
        assignee: req.body.assignee,
        order_status: req.body.order_status,
        pickup_date: req.body.pickup_date,
        delivered_date: req.body.delivered_date,
    });

    newShipment.save().then(item => res.json(item));
});

// @route   PATCH /shipments:id
// @desc    Update A Shipment
// @access  Public
router.patch('/:shipmentId', (req, res, next) => {
    const id = req.params.shipmentId;
    const shipmentFields = {};
    // if (req.body.item_name) shipmentFields.item_name = req.body.item_name;
    // if (req.body.origin) shipmentFields.origin = req.body.origin;
    // if (req.body.destination) shipmentFields.destination = req.body.destination;
    if (req.body.pickupDate) shipmentFields.pickup_date = req.body.pickupDate;
    if (req.body.deliveryDate)
        shipmentFields.delivered_date = req.body.deliveryDate;
    if (req.body.assign) shipmentFields.assignee = req.body.assign;
    if (req.body.orderStatus)
        shipmentFields.order_status = req.body.orderStatus;

    Shipment.findOneAndUpdate(
        { _id: id },
        { $set: shipmentFields },
        {
            new: true,
        }
    )
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'item updated',
                result,
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

// @route   DELETE shipments/:id
// @desc    Delete Shipment
// @access  Public
router.delete('/:id', (req, res) => {
    Shipment.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
