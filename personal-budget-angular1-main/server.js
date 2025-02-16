// Budget API

const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

const budget = {
    "myBudget": [
        {
            "title": "Food",
            "budget": 200
        },
        {
            "title": "Medical Bills",
            "budget": 150
        },
        {
            "title": "Insurance",
            "budget": 50
        },
        {
            "title": "Shopping",
            "budget": 50
        },
        {
            "title": "Health Care",
            "budget": 50
        },
        {
            "title": "House Rent",
            "budget": 300
        },
        {
            "title": "Groceries",
            "budget": 200
        }
    ]
}





app.get("/budget", (req,res) => {
    res.json(budget);
})

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});