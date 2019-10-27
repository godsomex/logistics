const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ShipmentSchema = new Schema({
    item_name: {
        type: String,
        required: true,
    },
    origin: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    assignee: {
        type: String,
        default: 'waiting',
    },
    order_status: {
        type: String,
    },
    pickup_date: {
        type: Date,
        default: Date.now,
    },
    delivered_date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Shipment = mongoose.model('shipment', ShipmentSchema);
