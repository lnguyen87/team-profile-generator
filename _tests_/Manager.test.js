const Manager = require('../lib/Manager');

test('properties of manager object', () => {
    const manager = new Manager('Jen', '0001', 'jen@email.com', '1');

    expect(manager.name).toEqual('Jen');
    expect(manager.id).toEqual('0001');
    expect(manager.email).toEqual('jen@email.com');
    expect(manager.office).toEqual('1');
})

test("get manager's info", () => {
    const manager = new Manager('Jen', '0001', 'jen@email.com', '1')

    expect(manager.getName()).toBe('Jen');
    expect(manager.getId()).toEqual('0001');
    expect(manager.getEmail()).toEqual('jen@email.com');
    expect(manager.getOffice()).toEqual('1');
})