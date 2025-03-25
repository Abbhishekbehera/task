const task = require('../models/tasklisting')



module.exports.index = async (req, res) => {
    let alltasks = await task.find({})
    res.render('index.ejs', { alltasks })
}
module.exports.new = async (req, res) => {
    res.render('new.ejs')
}
module.exports.create = async (req, res) => {
    let newTask = new task(req.body.newtask)
    await newTask.save()
    res.redirect('/tasks')
}
module.exports.show = async (req, res) => {
    let { id } = req.params
    let alltasks = await task.findById(id)
    res.render('show.ejs', { alltasks })
}
module.exports.edit = async (req, res) => {
    let { id } = req.params
    let alltasks = await task.findById(id)
    res.render('update.ejs', { alltasks })
}
module.exports.update = async (req, res) => {
    let { id } = req.params
    await task.findByIdAndUpdate(id, req.body, { new: true });
    //res.redirect(`/tasks/${id}`)
    res.redirect('/tasks')
}
module.exports.delete = async (req, res) => {
    let { id } = req.params
    const deleteTask = await task.findByIdAndDelete(id)
    console.log(deleteTask)
    res.redirect('/tasks')
}