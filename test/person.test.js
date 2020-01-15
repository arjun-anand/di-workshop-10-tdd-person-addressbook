const chai = require('chai')
const expect = chai.expect

const Person = require('../models/person.js')
// Your Person test goes here!
describe ('Person', () => {
    it('should initialize properly', () => {
        var person = new Person('Arjun', 'Anand', '1 Jan 1990')
        expect(person.firstName).to.equal('Arjun')
        expect(person.surname).to.equal('Anand')
        expect(person.dob).to.equal('1 Jan 1990')
        expect(person.emails).to.deep.equal([])
        expect(person.numbers).to.deep.equal([])
    })

    it('should capitalise the first name', () => {
        var person = new Person('amy', 'Nother', '1 Jan 1990')
    
        expect(person.firstName).to.equal('Amy')
        expect(person.surname).to.equal('Nother')
        expect(person.dob).to.equal('1 Jan 1990')
    })
    
    it('shoulds reutrn a full name', ()=>{
        var person = new Person('Arjun', 'Anand', '1 Jan 1990')
    
        expect(person.fullname()).to.equal('Arjun Anand')
    })

    it('should append new emails to the empty array', ()=>{
        var person = new Person('Arjun', 'Anand', '1 Jan 1990')
        person.addEmail('arjun.anand@ada.ac.uk')
        person.addEmail('arjun@anand.com')

        expect(person.emails).to.deep.equal([
            'arjun.anand@ada.ac.uk',
            'arjun@anand.com'
        ])
        console.log(person.returnFormattedDetails());
    })

    it('should append new phone numbers to the empty array', ()=>{
        var person = new Person('Arjun', 'Anand', '1 Jan 1990')
        person.addPhoneNumber('07123456789')
        person.addPhoneNumber('98765432180')
        expect(person.numbers).to.deep.equal([
            '07123456789',
            '98765432180'
        ])
        console.log(person.returnFormattedDetails());
    }) 
    
    
    
})

