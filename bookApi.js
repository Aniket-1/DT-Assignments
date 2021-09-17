const express = require('express')
const router = express.Router()
const booksData = require('./booksData.json')

const url = 'localhost:3000/books'
router.get('/', (req, res)=>{
    console.log("Getting All Books");
    res.json(booksData)
})

router.post('/', (req, res) => {
    console.log("Adding A Book!");
    let { token } = url.parse(req.url, true).query.token;
    if (process.env.token == token){
        booksData.push(req.body)
        res.json({message:"Book Added!"})
    }
    else{
        res.json({message: "You're not an admin"})
    }
    
    
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
    let { token } = url.parse(req.url, true).query.token;
    if (process.env.token == token){
        booksData.forEach((data, idx) => {
            if (data.id === parseInt(id)){
                booksData[idx] = book
            }
        });
        res.json({message:"Book Updated!"})
    }
    else{
        res.json({message:"You're not an admin!"})
    }
    
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    let { token } = url.parse(req.url, true).query.token;
    if (process.env.token == token){
        booksData.forEach((el, idx)=>{
            if (el.id === parseInt(id)){
                booksData.splice(idx)
            }
        });
        res.json({message: `Book ${id} Deleted!`});
    }

    else{
        res.json({message: "You're not an admin!"})
    }
})

module.exports = router;