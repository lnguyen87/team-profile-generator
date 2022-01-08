const Intern = require('../lib/Intern');

test('properties of info object', () => {
    const intern = new Intern('Logan', '4321', 'logan@email.com', 'University of Utah');

    expect(intern.name).toEqual('Logan');
    expect(intern.id).toEqual('4321');
    expect(intern.email).toEqual('logan@email.com');
    expect(intern.school).toEqual('University of Utah');
})

test("get intern's info", () => {
    const intern = new Intern('Logan', '4321', 'logan@email.com', 'University of Utah')

    expect(intern.getName()).toBe('Logan');
    expect(intern.getId()).toEqual('4321');
    expect(intern.getEmail()).toEqual('logan@email.com');
    expect(intern.getSchool()).toEqual('University of Utah');
})