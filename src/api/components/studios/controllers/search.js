function search(req, res, next) {
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'Studio found',
        });
    } catch (error) {
        next(error);
    }
}
module.exports = search;