const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    datechosen: {
        type: Date,
        required: false
    },
    timepickerchosen: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = Customer = mongoose.model('Customer', UserSchema);