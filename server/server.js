// import express and body-parser
const express = require('express');
const bodyParser = require('body-parser');

// set up express as a function and assign 5000 as the port
const app = express();
const PORT = 5000;

// this type of line (data) will live in the database soon
const recordCollection = require('./modules/record-collection');

// set up the static page
app.use(express.static('server/public'));

// right now you won't understand this line. But you need it for body-parser, so use it now:
app.use(bodyParser.urlencoded({extended: true}));

// routes (get, post, put, and delete requests)
app.get('/records', (req, res) => {
    res.send(recordCollection);
});// end app.get('/records')

app.post('/add-record', (req, res) => {
    console.log(req.body); //req.body is the value from the data key on the client-side code
    recordCollection.push(req.body);
    res.sendStatus(200); // this code is sending a confirmation message as a response
    // module.exports = data;
    // res.send(recordCollection)
});// end app.post

app.listen(PORT, () => {
    console.log(`...and we're live on port ${PORT}`);
});// end app.lsiten


