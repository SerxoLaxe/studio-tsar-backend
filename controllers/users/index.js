const artists = require('./artists')
const clients = require('./clients')

class User{
    constructor(
        name,
        surname,
        nationalID,
        tlfNumber,
        age,
        birthDate,
        accounCreationDate,
        email,
        instagramAccountName
        ){
            this.name= name;
            this.surname=surname;
            this.nationalID=nationalID;
            this.tlfNumber=tlfNumber;
            this.age=age;
            this.birthDate=birthDate;
            this.accounCreationDate=accounCreationDate;
            this.email=email;
            this.instagramAccountName=instagramAccountName;
        }
    }

module.exports = {
    clients,
    artists,
    User
}