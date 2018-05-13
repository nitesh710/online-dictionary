const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const difflib = require('difflib');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

var obj = require('./data.json');

console.log("data.json file........");

app.post('/getMatches/', function(req, res) {
    console.log(req.body.word);

    var keys = Object.keys(obj);
   
    var str = difflib.getCloseMatches(req.body.word, keys, 2, 0.8);
    console.log(str);

    res.send(str[0]);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log("Server listening on port localhost:" + PORT);
})