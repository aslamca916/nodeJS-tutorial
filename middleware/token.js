function Token(req,res,next){
    console.log("Creating Token...");
    req.token = true;
    next();
}

module.exports = Token;