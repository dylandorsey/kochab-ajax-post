// require
const express = require('express');
const recordCollection = require('../modules/record-collection');

// this is not a brand new application, so
// Router is a class or constructor
const router = express.Router();

// as this is written, this would look for /record/record. The price of entry to get into this file is indeed checking for /record
// router.get('/record', (req, res) => { 
//     res.send(recordCollection);
// });// end app.get('/records')

router.get('/', (req, res) => { // as this is written, this would look for /record/record. The price of entry to get into this file is indeed checking for /record
    res.send(recordCollection);
});// end app.get('/records')

router.post('/', (req, res) => {
    console.log(req.body); //req.body is the value from the data key on the client-side code
    recordCollection.push(req.body);
    res.sendStatus(201); // this code is sending a confirmation message as a response
    // module.exports = data;
    // res.send(recordCollection)
});// end app.post

module.exports = router;