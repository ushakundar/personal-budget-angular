// Budget API

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors());
app.use('/', express.static('public'));

/*const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 25
        },
        {
            title: 'Rent',
            budget: 275
        },
        {
            title: 'Grocery',
            budget: 90
        },
    ]
};*/



app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

/*app.get('/budget', (req, res) => {
    res.json(budget);
});*/

app.get('/budget', (req, res) => {
    fs.readFile('budget-data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading budget data');
        } else {
            res.json(JSON.parse(data));
        }
    });
});


app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});