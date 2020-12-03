var runFnc = require("../index");

describe('fizzbuzz', () => {
    it('should return fizz if value is divisible by 3', () => {
        expect(runFnc(3)).toEqual('fizz');        
    });

    it('should return buzz if value is divisible by 5', () => {
        expect(runFnc(5)).toEqual('buzz');        
    });    

    it('should return fizzbuzz if value is divisible by 5 and 3', () => {
        expect(runFnc(15)).toEqual('fizzbuzz');        
    });       
    
    it.each([
        [3, 'fizz'],
        [6, 'fizz'],
        [9, 'fizz'],
        [15, 'fizzbuzz'],
    ])('%s should return %s', (val, expected) => {
        expect(runFnc(val)).toEqual(expected);
    })
});
