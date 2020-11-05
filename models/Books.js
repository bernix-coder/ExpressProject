const mongoose =require('mongoose')

const booksSchema = new mongoose.Schema({
    title:{
        type : String,
        required:true
    },

    author:{
        type: String,
        required:true
    },  
    

    numberOfPages:{
        type : Number,
        required:true
    },

    category:{
        type : String,
        required:true
    },
    rating:{
        type: Number
    }


})

module.exports = mongoose.model('book', booksSchema)