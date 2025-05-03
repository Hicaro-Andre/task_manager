import mongoose from "mongoose";
const {Schema, model} = mongoose

const userSchema = new Schema({
  email: String,
  senha: String,
});

const User = model('user', userSchema);
export default User;