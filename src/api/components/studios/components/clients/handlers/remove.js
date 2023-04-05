function remove(req, res, next){
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'Client removed from studio successfully.',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = remove;