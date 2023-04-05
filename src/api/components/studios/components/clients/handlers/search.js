function search(req, res, next){
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'Client searched on studio successfully.',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = search;