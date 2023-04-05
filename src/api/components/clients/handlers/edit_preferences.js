function edit_preferences(req, res, next){
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'Client account preferences edited successfully.',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = edit_preferences;