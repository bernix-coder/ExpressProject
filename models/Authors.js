const mongoose =require('mongoose')

const authorsSchema = new mongoose.Schema({
  

    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique: true,
        validate: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-z]{2,}))$/
    },

//    bookTitle:{
//         type :String ,
//         required:true
//     }

})

module.exports = mongoose.model('author', authorsSchema)