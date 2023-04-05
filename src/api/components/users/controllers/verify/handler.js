const verifyUser = require('./service')
async function verify(req, res, next){
    try {
        await verifyUser(req.params.userId, req.params.verificationCode)
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'User account verified successfully.',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = verify;