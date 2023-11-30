const express = require('express');
const { Worker } = require('worker_threads');
const port = 5000;
const app = express();
app.get('/non-blocking', (req, res) => {
    return res.send('Non blocking');
});
app.get('/blocking', (req, res) => {
    const worker = new Worker('./worker.js');
    worker.on('message', (data) => {
        return res.status(200).send(`Result: ${data}`);
    });
    worker.on('error', (err) => {
        return res.status(200).send(`Error: ${err.message}`);
    });
});
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
