const express = require('express'),
app = express(),
port = process.env.PORT || 3000

const users = [
    {name:"user1", age:"16"},
    {name:"user2", age:"18"}
];

app.get('/', (req, res) => {
    res.json(users);
})

app.post('/', (req, res) => {
    res.send(users);
})

app.listen(port)