function edit() {
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'Client edited on studio successfully.',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = edit;