const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);

        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email
    }
    getOffice(){
        return this.office
    }
}

module.exports = Manager