const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1 style="color:blue">
        BLUE ENVIRONMENT - VERSION 1
        </h1>
    `);
});

app.listen(3000, () => {
    console.log("Blue App Running");
});
