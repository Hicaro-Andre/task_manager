import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://hicaroandre:epBcEqHv0fu1wPpH@cluster0.eyhty.mongodb.net/login_user?retryWrites=true&w=majority")


const article = new user({
  email: 'hicaroandre@hotmail.com',
  senha: 'c7s8v6p1',
});

await article.save();

const firstArticle = await user.findOne({});
console.log(firstArticle);