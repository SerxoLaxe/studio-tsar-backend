const services = require('./services')
async function remove(req, res, next){
    try {
        await services.removeUser(req.params.userId)
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'User account deleted successfully.',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = remove;
