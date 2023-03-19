function getById(req, res, next) {
    try {
        res.statusCode = 200;
        res.send({
            status: "Ok",
            data: 'artist account selected successfully.',
        });
    } catch (error) {
        next(error);
    }
}

async function getArtistByIdquery(id) {
    try {
        
    } catch (error) {
        
    }
    
}

module.exports = getById