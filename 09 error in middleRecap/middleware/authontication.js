 function authentication(req, res, next)  {
    // dummy code 
    let token = "ABCDE";
    const Access = token == "ABCDE" ? 1 : 0;
    if (!Access) {
        res.status(403).send("NO permition");
    }
    else {
        next();
    }
}
module.exports = authentication;