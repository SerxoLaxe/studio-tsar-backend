function getById(req, res, next) {
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'studio selected successfully.',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = getById