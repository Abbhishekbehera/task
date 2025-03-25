const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const path = require('path')
const port = 4000
const initDb = require('./init/data')
const task = require('./models/tasklisting')
const data = require('./init/data')
const ejsMate = require('ejs-mate')
const tasks=require('./routes/tasks')
const tasksController=require('./controllers/tasksController')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', ejsMate)
app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/tasks',tasks)
app.use(express.static(path.join(__dirname, 'public')))

main()
    .then(() => {
        console.log('Database is connected.')
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://behera:12345@cluster0.pe2oc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.listen(port, () => {
    console.log(`App is running on the port ${port}`)
})