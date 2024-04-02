const mongoose = require("mongoose");
require('dotenv').config();
const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"HospitalDB"
    })
    .then(()=>{
        console.log("Database connection succussfull");
    }).catch((err)=>{
        console.log(`Error in connection ${err}`);
    });
};
module.exports = dbConnection;