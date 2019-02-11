const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        const spy = expect.createSpy();
        spy('Zane', 27);
        expect(spy).toHaveBeenCalledWith('Zane', 27);
    });

    it('should call saveUser with user object', () => {
        var email = 'zane@example.com';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});