const mongoose = require('mongoose');

const CalendarSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    private: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('calendars', CalendarSchema);