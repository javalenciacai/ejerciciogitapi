function sumar(a,b){
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("los argumentos deben ser números");
    }
    return a+b;
}
function maxNumber(array){
    return Math.max(...array);
}

module.exports = {sumar, maxNumber};