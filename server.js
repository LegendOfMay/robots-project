const express = require('express');
const app = express();

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
  });
  

const client = require('./db/client.js');
client.connect();