function validate(req, res, next){
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'User account validated successfully.',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = validate;