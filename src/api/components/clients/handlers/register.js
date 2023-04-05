function register(req, res, next) {
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'New client registered successfully.',
        });
    } catch (error) {
        next(error);
    }
}
module.exports = register;