const express = require("express")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static("views"));

const emailDB = "aslamca1998@gmail.com"
const passwdDB = "123"

app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    console.log(req.body);
    console.log(email);
    console.log(password);
    if(email === emailDB && password === passwdDB){
        res.send("Success");
    }else{
        res.send("Failure")
    }
});




const PORT = process.env.PORT || 3001

app.listen(PORT)


