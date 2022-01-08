const Engineer = require('../lib/Engineer');

test('properties of engineer object', () => {
    const engineer = new Engineer('John', '1234', 'john@email.com', 'lnguyen87');

    expect(engineer.name).toEqual('John');
    expect(engineer.id).toEqual('1234');
    expect(engineer.email).toEqual('john@email.com');
    expect(engineer.github).toEqual('lnguyen87');
})

test("get engineer's name", () => {
    const engineer = new Engineer('John', '1234', 'john@email.com', 'lnguyen87')

    expect(engineer.getName()).toBe('John');
    expect(engineer.getId()).toEqual('1234');
    expect(engineer.getEmail()).toEqual('john@email.com');
    expect(engineer.getGithub()).toEqual('lnguyen87');
})