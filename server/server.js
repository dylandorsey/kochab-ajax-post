// import express and body-parser
const express = require('express');
const bodyParser = require('body-parser');

// set up express as a function and assign 5000 as the port
const app = express();
const PORT = 5000;

// this type of line (data) will live in the database soon
const recordRouter = require('./routes/record.route');

// set up the static page
app.use(express.static('server/public'));

// right now you won't understand this line. But you need it for body-parser, so use it now:
app.use(bodyParser.urlencoded({extended: true}));

// routes (get, post, put, and delete requests)
// ^ these routes have been moved to record.route.js^ , and
// they have been replaced by this

app.use('/record', recordRouter);

app.listen(PORT, () => {
    console.log(`...and we're live on port ${PORT}`);
});// end app.lsiten


