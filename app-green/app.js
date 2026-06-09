const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1 style="color:green">
        GREEN ENVIRONMENT - VERSION 2
        </h1>

        <p>New Feature Released Successfully</p>
    `);
});

app.listen(3000, () => {
    console.log("Green App Running");
});
