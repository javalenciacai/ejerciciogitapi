const { describe } = require("mocha");
const { factorial } = require('./factorialFunction');
const { expect } = require("chai");

describe('Function exist', () => {
    it('Debería existir la función Calcular factorial', () => {
            expect(factorial).to.exist;
    })
})

describe('Function calculate correct', () => {
    it('Debería calcular correctamente el factorial', () => {
            const calc = factorial(5)
            expect(calc).to.equal(120)
    })
})

describe('Function calculate incorrect values', () => {
    it('Debería validar correctamente para un valor negativo', () => {
            expect(() => factorial(-1)).to.throw('los argumentos deben ser números positivos');
    })
    it('Debería calcular correctamente para el valor 0', () => {
        const calc = factorial(0)
        expect(calc).to.equal(1)
})
})
