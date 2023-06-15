function sumar(a,b){
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("los argumentos deben ser números");
    }
    return a+b;
}

function reverse(arr){
    const array_reverse = arr.slice();
    array_reverse.reverse();
    return array_reverse;
}



module.exports = {sumar};

module.exports = {reverse};