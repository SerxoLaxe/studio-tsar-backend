function add(req, res, next) {
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'New bill added.',
        });
    } catch (error) {
        next(error);
    }
}
module.exports = add;