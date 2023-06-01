const express = require("express")
const app = express()
const cors = require("cors");
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static("views"));

// const emailDB = "aslamca1998@gmail.com"
// const passwdDB = "123"
// app.post("/login",(req,res)=>{
//     const {email,password} = req.body;
//     console.log(req.body);
//     console.log(email);
//     console.log(password);
//     if(email === emailDB && password === passwdDB){
//         res.send("Success");
//     }else{
//         res.send("Failure")
//     }
// });

const userdata = [
    {id:1,name:"Aslam"},
    {id:2,name:"Jishad"},
    {id:3,name:"Sabith"}
];

app.post("/user",(req,res)=>{
    const query = parseInt(req.query.id)
    const userName = req.query.name;
    const filteredUserData = userdata.filter((data)=> {
        if(query || userName){
            return data.id === query || data.name ===userName;
        }else {
            return data;
        }
    })

    res.json(filteredUserData);
    
})

app.get("/user/:id",(req,res)=>{
    const userID = parseInt(req.params.id);

    const singleUser = userdata.filter((data)=> data.id === userID);

    res.json(singleUser);
})

//Adding Users
const userArray = [];

app.post("/addUser", (req,res)=>{
    // const {name} = req.body;
    // userArray.push(name);
    // res.json(userArray);
    userArray.push(req.body);

    console.log(userArray);

    res.json("Data has been added sucessfully");
})

app.get("/displayUser", (req,res)=>{
    res.json(userArray);
})



const PORT = process.env.PORT || 3001

app.listen(PORT)


