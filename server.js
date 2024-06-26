const express  = require("express")
require('dotenv').config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const dbConnection = require('./database/dbConnection');
const cloudinary = require("cloudinary")
// const messageRouter = require("./router/messageRouter")
const messageRouter = require("./router/messageRouter.js")
// const {errorMiddleware} = require("./middleware/errorMiddleware.js")
const errorMiddleware = require("./middleware/errorMiddleware.js")

const port = process.env.PORT;
const app = express();
app.use(
    cors({
        origin:[process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
        methods:["GET","POST","PUT","DELETE"],
        credentials:true,
    })
);

app.get("/",(req,res)=>{
    res.send("<h1>hlo duniya</h1>")
})
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp",
}));


// router
app.use("/api/v1/message", messageRouter);


dbConnection();


cloudinary.v2.config({
    cloud_name:process.env.COOKIE_CLOUD_NAME,
    api_key:process.env.COOKIE_API_KEY,
    api_secret:process.env.COOKIE_API_SECRET,
});

app.use(errorMiddleware);

app.listen(port,()=>{
    console.log(`Server listen at ${port}`);
})

