const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passwordCheck = require('./middleware/passwordCheck');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/check-password', passwordCheck, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/denied', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'denied.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
