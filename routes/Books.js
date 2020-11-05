const router =require('express').Router()
const mongoose = require('mongoose')
const Books =require('../models/Books')

//get all books in the database
router.get('/', async(req,res)=>{
    try{
        const books = await Books.find()
        res.json(books)
    }catch (error){
        console.log(error);
        res.status(500).json({message: error})
    }
})

//get a particular book with a specific id

router.get('/:id', async (req,res)=>{
    try{
        const book =  await Books.findById(req.params.id)
        if(book)
        res.json(book)
   }
   catch(error){
        res.status(404).send("Book not found")
   }
})

//post 

router.post('/',async(req,res)=>{
   const {title,author,numberOfPages,category} = req.body
   try{
   let book =  await Books.create({title,author,numberOfPages,category})
   res.status(201).json({book})
   } catch(err){
       res.status(400).send(err)
   }
  

    
})

//delete a book

router.delete('/:bookId',async(req,res)=>{
    try{
        const book =  await Books.findOneAndRemove(req.params.id)
       if(book){
           console.log(book);
           res.send('Deleted successfully')
       }
      
       
   }
   catch(error){
        res.status(404).send("Cannot delete book")
   }
})

module.exports =router