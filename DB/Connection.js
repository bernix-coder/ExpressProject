// require('dotenv').config()
const mongoose = require('mongoose')


const connectDb = async()=>{
   await mongoose.connect('mongodb+srv://bernyx:bernyx@cluster0.tag3u.mongodb.net/bernyx?retryWrites=true&w=majority',{useNewUrlParser:true , useUnifiedTopology:true})

   console.log('Database connected')
   
}

module.exports = connectDb