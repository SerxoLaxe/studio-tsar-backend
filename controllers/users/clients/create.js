function create(req, res, next) {
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'New client created successfully.',
        });
    } catch (error) {
        next(error);
    }
}
module.exports = create;