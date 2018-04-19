const express = require('express');
const app = express();
const PORT = 5000;

// this type of line (data) will live in the database soon
const recordCollection = require('./modules/record-collection');

app.use(express.static('server/public'));

// routes (get, post, put, and delete requests)
app.get('/records', (req, res) => {
    res.send(recordCollection);
});

app.listen(PORT, () => {
    console.log(`...and we're live on port: ${PORT}`);
});


