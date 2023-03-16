function validate(){
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'New artist account validated successfully.',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = validate;