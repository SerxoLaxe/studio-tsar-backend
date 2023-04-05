function remove(req, res, next){
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'Proyect removed successfully.',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = remove;