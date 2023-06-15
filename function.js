function sumar(a,b){
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("los argumentos deben ser números");
    }
    return a+b;
}

function factorial(num){
    console.log('QUE NUMERO LLEGA: ' + num)
        if (num < 0) {
            throw new Error("los argumentos deben ser números positivos");
        } else if (num == 0) {
            return 1;
        } else {
            var total = 1; 
            for (i=1; i<=num; i++) {
                total = total * i; 
            }
            return total; 
        }
      }


module.exports = {sumar};
module.exports = {factorial};