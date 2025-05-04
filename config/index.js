import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)


const article = new user({
  email: 'hicaroandre@hotmail.com',
  senha: 'c7s8v6p1',
});

await article.save();

const firstArticle = await user.findOne({});
console.log(firstArticle);