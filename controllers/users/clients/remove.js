function remove(requ, res, next){
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'Client account removed successfully.',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = remove;