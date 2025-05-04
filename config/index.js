import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)


const article = new user({
  email: 'teste@hotmail.com',
  senha: 'vdvfvf',
});

await article.save();

const firstArticle = await user.findOne({});
console.log(firstArticle);