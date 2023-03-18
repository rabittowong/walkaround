const express = require('express');
const app = express();
const port = 4200;

app.use(express.static('assets'));
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', (req, res) => res.sendFile(__dirname + '/src/index.html'));
app.get('/*', (req, res) => res.sendFile(__dirname + '/src/' + req.path));

app.listen(port, () => console.log(`App listening on port ${port}!`));
