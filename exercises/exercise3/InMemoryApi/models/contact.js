/* In this file you will define the Contact class and export it.
The contact class has the following properites:
firstName,
lastName,
phoneNumber,
email,
id
*/
class Contact  {
    static ids = 0;
    constructor(fN, lN, pN, e){
        this.firstName = fN;
        this.lastName = lN;
        this.phoneNumber = pN;
        this.email = e;
        this.id = Contact.ids++;
    }
}

module.exports = Contact;