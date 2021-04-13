export class Users {
    id: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    mobile: string | undefined;
    salary: string | undefined;

    constructor(id: string, firstName: string, lastName: string, email: string, mobile: string, salary: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mobile = mobile;
        this.salary = salary;
    }
}
