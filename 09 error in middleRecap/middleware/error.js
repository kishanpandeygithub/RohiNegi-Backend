function err(err, req, res, next) {
    if (err) {
        res.status(400).send({
            "message": err.message || "somethin went wrong"
        })
    }
}
module.exports = err;