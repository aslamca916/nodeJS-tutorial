function Validation(req,res,next){
    if(req.token){
        console.log("Approved");
        next();
        return;
    }
}

module.exports = Validation;