const express = require("express");
const path = require("path");

const app= express();

const hostname= '127.0.0.1';
const port = '5000';

const publicDirectory = path.join(__dirname, './');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})