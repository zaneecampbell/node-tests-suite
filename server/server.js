const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    const users = [{name: 'Zane', age: 27}, {name: 'Daniel', age: 26}]
    res.status(200).send(users);
});

app.listen(3000);
module.exports.app = app;