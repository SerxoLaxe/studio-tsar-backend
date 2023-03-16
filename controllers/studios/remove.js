function remove(){
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'Studio removed successfully.',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = remove;