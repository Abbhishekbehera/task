const mongoose = require('mongoose')
const initDb = require('./data')
const task = require('../models/tasklisting')


main()
    .then(() => {
        console.log('Database is connected.')
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://behera:12345@cluster0.pe2oc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}
const dataBase = async () => {
    await task.insertMany(initDb.data)
    console.log('Data is saved')
}
dataBase()
