function edit() {
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'artist edited on studio successfully.',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = edit;