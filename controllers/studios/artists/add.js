function add(req, res, next) {
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'Artist added to studio successfully.',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = add;