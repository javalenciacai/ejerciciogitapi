function sumar(a,b){
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("los argumentos deben ser números");
    }
    return a+b;
}

function esPrimo(num){
    if(typeof num !== 'number') {
        throw new Error("los argumentos debe ser un número");
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }

        return true;
  }
}

module.exports = {sumar, esPrimo};
