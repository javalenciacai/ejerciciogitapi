const { describe, it } = require('mocha');
const { expect } = require('chai');
const { reverse } = require('./function');

describe('Unit Tests', () => {
    describe('reverse', () => {
      it('should return the orden for numbers', () => {
        // Arrange
        const array1 = [1, 2, 3];
  
        // Act
        const result = reverse(array1);
  
        // Assert
        expect(result).to.equal([3,2,1]);
      });
    });
});