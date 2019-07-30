const express = require('express');
const mongoose = require('mongoose');


const connectDB = async() => {
    const opt = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true
    };
    const password = process.env.CONTRASENA;
    const user = process.env.USERNAMEMONGO;
    const mongoUrlSafe = `mongodb://${user}:${password}@cluster0-shard-00-00-wlrrk.mongodb.net:27017,cluster0-shard-00-01-wlrrk.mongodb.net:27017,cluster0-shard-00-02-wlrrk.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {

        await mongoose.connect(mongoUrlSafe, opt);
        console.log('conectado a la base de datos con exito');


    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;