const express = require('express');
const mongoose = require('mongoose');
require('../models/customers');
const Customer = mongoose.model('Customer');
const router = express.Router();

router.post('/', async(req, res) => {
    console.log('Peticion al servidor metodo POST');
    console.log('Los datos que me han llegado son?');
    console.log('Los datos que me han llegado son?');
    console.log(req.body);
    console.log('**************************************');
    console.log('**************************************');
    const {
        Name,
        email,
        phone,
        description
    } = req.body;

    let datechosen = new Date('November 19, 1992 03:24:00');
    if (req.body.datechosen) {
        datechosen = req.body.datechosen;
    };
    let timepickerchosen = "notime"
    if (req.body.timepickerchosen) {
        timepickerchosen = req.body.timepickerchosen;
    }

    try {
        // mirar si el usuario ya existe
        //emai not defined?
        if (!email) console.log(' no hay email');
        if (!Name) console.log('no hay nombre');
        if (!description) console.log('no hay description');
        console.log('***************************************');
        console.log('***************************************');
        console.log('***************************************');
        console.log('***************************************');
        console.log('email not defined?');
        console.log(email);
        console.log('***************************************');
        console.log('***************************************');
        console.log('***************************************');
        console.log('***************************************');
        let customer = await Customer.findOne({
            email: email
        });
        let yaexiste = false;
        let msg = "thanks, we will be calling you soon";
        if (customer) yaexiste = true;
        if (yaexiste) msg = "Thanks You have already sent this form but no we will keep you in the first places";
        const objetoGuardar = {
            Name,
            email,
            phone,
            description,
            datechosen,
            timepickerchosen
        }
        customer = new Customer(objetoGuardar);
        let successSaved = await customer.save();
        if (successSaved) {
            res.json({
                msg,
                successSaved: true
            })
        } else {
            res.json({
                msg: 'Houston we have problems here',
                successSaved: false
            })
        }






    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');

    }


});

module.exports = router;