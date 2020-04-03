let express = require('express')
let path = require('path')
let cors = require('cors')
let bodyParser = require('body-parser')
let app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(express.static('./build'))
require('./db/dbConfig')



let User = require('./models/demoModel')



// app.post('/createUser' , (request, response)=>{

//     let {name, email, age} = request.body
//     let body = {name,email,age}
//     console.log(request.body);
    
//     let newUser = new User(body)
//     if(newUser){
//         newUser.save().then( user =>{
//             console.log(user);
//             response.json("working")
            
//         })
//     }
//     console.log("not working");
//     response.json("exit")
    

// })

// app.get('/users' , (req,res)=>{

    
//     User.aggregate([
//         { $group : { _id : "$YearOfBirth", Total : { $sum : 1} } },
//     ])
//     res.end()
// })





app.use('*',  (req, res)=> {
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
   });

   
app.listen(process.env.PORT || 6070,()=>{
    console.log("server sahb is running");
    
})