

const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/user",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    function (err, data) {
        console.log(err || data)
    }).then(()=>{
        console.log("DB connected");
        
    })