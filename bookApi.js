const express = require('express')
const router = express.Router()
const booksData = require('./booksData.json')

router.get('/', (req, res)=>{
    console.log("Getting All Books");
    res.json(booksData)
})

router.post('/', (req, res) => {
    console.log("Adding A Book!");
    booksData.push(req.body)
    res.json({message:"Book Added!"})
})

router.get('/:id', (req, res) => {
    console.log("Getting Book By ID")
    const { id } = req.params;
    res.json(booksData.filter((book) => book.id === parseInt(id)))
})

router.put('/:id', (req, res) => {
    console.log("Updating A Book")
    const book = req.body
    const { id } = req.params
    booksData.forEach((data, idx) => {
        if (data.id === parseInt(id)){
            booksData[idx] = book
        }
    });
    res.json({message:"Book Updated!"})
})

module.exports = router;