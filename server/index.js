const express = require('express');
const db = require('../database/index.js');

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.static(__dirname + '/../client/dist'))

app.listen(port, () => console.log('listening on port ' + port))