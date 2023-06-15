const { describe, it } = require('mocha');
const { expect } = require('chai');
const { sumar, maxNumber } = require('./function');

describe('Unit Tests', () => {
  describe('sumar', () => {
    it('should return the sum of two numbers', () => {
      // Arrange
      const num1 = 2;
      const num2 = 3;

      // Act
      const result = sumar(num1, num2);

      // Assert
      expect(result).to.equal(5);
    });
  });

  describe('sumar function valida numeros', () => {
    it('should throw an error when provided with invalid arguments', () => {
      // Arrange & Act & Assert
      expect(() => sumar('2', 3)).to.throw('los argumentos deben ser números');
      expect(() => sumar(2, '3')).to.throw('los argumentos deben ser números');
      expect(() => sumar('2', '3')).to.throw('los argumentos deben ser números');
      expect(() => sumar({}, 3)).to.throw('los argumentos deben ser números');
      expect(() => sumar(2, null)).to.throw('los argumentos deben ser números');
    });
  });

  describe('max number', ()=>{
    it('should return the max number into array',()=>{
      //arrange
      const num = [1,3,5,2,4]
      //act
      const result = maxNumber(num)
      //assert
      expect(result).to.equal(5)
    })
  })
});
