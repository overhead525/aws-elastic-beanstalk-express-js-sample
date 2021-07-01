const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<html><body><h1>I'm done with that</h1></body></html>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
