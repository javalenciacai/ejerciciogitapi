const { sumar } = require('./function');

const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json())

app.use(cors());

//Ruta para sumar dos numeros.
app.post('/sumar', (req, res) => {
  const { num1 , num2 } = req.body; // Obtener los números del cuerpo del JSON
  const resultado = sumar(parseFloat(num1),parseFloat(num2));
  res.json({resultado});
});

//Puerto en el se ejecutara la API
const port = process.env.PORT || 3000;
app.listen(port, () =>{
console.log(`API running on port ${port}`);

});
