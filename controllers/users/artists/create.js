function create(req, res, next) {
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'New artist account created successfully.',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = create;