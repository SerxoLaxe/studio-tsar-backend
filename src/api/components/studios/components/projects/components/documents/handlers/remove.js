function remove(req, res, next) {
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'Document removed.',
        });
    } catch (error) {
        next(error);
    }
}
module.exports = remove;