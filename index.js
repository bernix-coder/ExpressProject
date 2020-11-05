
const express =require('express')
const app = express()
const connectDb = require('./DB/Connection')
const port = 3000

connectDb()
app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use('/books',require('./routes/Books'))
app.use('/authors',require('./routes/Authors'))


app.listen(port, ()=>{
    console.log('Appliication started')
})


