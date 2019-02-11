const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            const res = utils.add(33, 11);
        
            expect(res).toBe(44).toBeA('number');
        });
    });
    
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
    
    it('should square a number', () => {
        const res = utils.square(3);
    
        expect(res).toBe(9).toBeA('number');
    });
    
    it('should async square a number', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBe(25).toBeA('number');
            done();
        });
    });
});

it('should verify first and last names are set', () => {
    const user = {location: 'Washington', age: 27}
    const res = utils.setName(user, 'Zane Campbell');

    expect(res).toInclude({
        firstName: 'Zane',
        lastName: 'Campbell'
    }).toBeA('object');
});

// it('should expect some values', () => {
//     // expect(12).toNotBe(12);
//     // expect({name: "zane"}).toNotEqual({name: "Zane"});
//     // expect([2,3,4]).toExclude(1);
//     expect({
//         name: "Zane",
//         age: 27,
//         location: "Washington"
//     }).toExclude({
//         age: 23
//     });
// });