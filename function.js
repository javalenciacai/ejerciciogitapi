function sumar(a,b){
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("los argumentos deben ser números");
    }
    return a+b;
}

function reverse(arreglo){
    return null;
}



module.exports = {sumar};

module.exports = {reverse};