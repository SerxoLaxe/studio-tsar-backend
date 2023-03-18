function search(req, res, next) {
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'Document search.',
        });
    } catch (error) {
        next(error);
    }
}
module.exports = search;