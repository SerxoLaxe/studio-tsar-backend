function edit(req, res, next){
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'Client account edited successfully.',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = edit;