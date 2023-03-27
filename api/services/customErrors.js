class APIerror extends Error {
    constructor(message){
        super(message)
        this.name == 'APIError'
    }
}

module.exports = {APIerror}