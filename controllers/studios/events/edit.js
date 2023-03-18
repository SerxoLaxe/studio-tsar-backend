function edit(req, res, next) {
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'Event edited successfully.',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = edit;