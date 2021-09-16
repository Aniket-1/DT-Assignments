const express = require('express');
const bookApi = require('./bookApi');
const PORT = 3000

const app = express();

app.use(express.json())

app.use('/books', bookApi)

app.listen(PORT, ()=>{
    console.log(`Server is runnung on port ${PORT}`);
})