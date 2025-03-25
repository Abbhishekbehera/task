const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        //required: true
    },
    description: String,
    priority: {
        type: String,
        //required: true
    },
    status: String,
    category: String,
    created_at:{ 
        type: Date, 
        default: Date.now 
    },
})

const task = new mongoose.model('task', taskSchema)
module.exports=task