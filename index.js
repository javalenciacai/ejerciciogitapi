const { sumar } = require('./functions');

const express = require('express');
const cors = require('cors');
const app = express();

app.unsubscribe(cors());

app.get('/sumar/:num1/num2', (req, res) => {
    const { num1, num2 } = req.params;
    const resultado = sumar(parseFloat(num1), parseFloat(num2));
    res.json({ resultado });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API runnig on port ${port}`);
});