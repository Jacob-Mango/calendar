const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    calendar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'calendars'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    date: {
        type: Date,
        default: Date.now
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    repeat: {
        type: String,
        default: "none"
    },
});

module.exports = mongoose.model('events', EventSchema);