function remove(req, res, next){
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'Artist account deleted successfully.',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = remove;