const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = 8001;



app.get('/', (req, res) => {
    res.send('Hello, world!');
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});