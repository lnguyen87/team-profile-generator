const Employee = require('../lib/Employee');

test('properties of engineer object', () => {
    const employee = new Employee('John', '1234', 'john@email.com');

    expect(employee.name).toEqual('John');
    expect(employee.id).toEqual('1234');
    expect(employee.email).toEqual('john@email.com');
})

test("get employee's info", () => {
    const employee = new Employee('John', '1234', 'john@email.com')

    expect(employee.getName()).toBe('John');
    expect(employee.getId()).toEqual('1234');
    expect(employee.getEmail()).toEqual('john@email.com');
})