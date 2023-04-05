function add(req, res, next) {
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'Document added.',
        });
    } catch (error) {
        next(error);
    }
}
module.exports = add;