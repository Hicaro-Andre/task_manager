import mongoose from "mongoose";
const {Schema, model} = mongoose

const taskSchema = new Schema({

  titulo: String,
  description: String,
  completed: Boolean
})

const Task = model('Task' , taskSchema)
export default Task