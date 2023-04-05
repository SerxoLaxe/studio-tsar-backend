function getById(req, res, next) {
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'Document selected successfully.',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = getById