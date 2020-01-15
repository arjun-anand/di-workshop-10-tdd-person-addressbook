// Your Person class goes here!

class Person {
    constructor(firstName, surname, dob) {
        this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
        this.surname = surname.charAt(0).toUpperCase() + surname.slice(1)
        this.dob = dob
        this.emails = []
        this.numbers = []
    }

    fullname() {
        return this.firstName + ' ' + this.surname
    }

    addEmail(email){
        this.emails.push(email)

    }

    addPhoneNumber(num){
        this.numbers.push(num)
    }

    returnFormattedDetails() {
        return this.fullname() + '\n' + "---------- \n"+
        "DOB: "+this.dob + '\n' + "Email Addresses: " + '\n' +this.emails +
        '\n' + "Phone Number(s): \n" + this.numbers

    }

}

let person = new Person('arjun', 'anand', '2 Apr 2001', "arjun.anand@ada.ac.uk", "07123456789");
console.log(person.returnFormattedDetails());


module.exports = Person
