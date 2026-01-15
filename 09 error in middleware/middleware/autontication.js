const auth = (req, res, next) => {
    //aunthontication karna padega ki kya ye admine hai 
    // dummy code 
    const token = "ABCDE";
    const Access = token === "ABCDE" ? 1 : 0;
    if (!Access) {
        res.status(403).send("No permission");
    }
    next();
}
module.exports = auth;