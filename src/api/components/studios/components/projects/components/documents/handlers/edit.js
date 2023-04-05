function edit(req, res, next) {
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'Document edited',
        });
    } catch (error) {
        next(error);
    }
}
module.exports = edit;