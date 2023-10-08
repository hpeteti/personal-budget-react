// Budget API
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const fileSystem = require('fs');
const importJSON = fileSystem.readFileSync('budget.json','utf8');
const budgetData = JSON.parse(importJSON);

app.use(cors());
app.use('/', express.static('public'));

const budget = [];

app.get('/hello', (req,res) => {
    res.send('Hello World!');
});

app.get('/budget', (req,res) => {
    res.json(budgetData);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});