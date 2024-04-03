const Message = require("../model/messageSchema")
// const errorMiddleware = require("../controller/messageController")
const ErrorHandler = require("../middleware/errorMiddleware")
const {catchAsyncErrors} = require("../middleware/catchAsyncErrors")


module.exports.sendMessage = catchAsyncErrors( async(req,res,next) => {
    const {firstName , lastName, email , phone , message} = req.body;
        if(! firstName || !lastName || !email || !phone || !message){
            return next(new ErrorHandler("Please Fill Full Form !",400));
        }
        await Message.create({firstName,lastName,email,phone,message});
        res.status(200).json({
            success:true,
            message:"Message Send Successfully",
        })
})
    // try{
    //     const {firstName , lastName, email , phone , message} = req.body;
    //     if(! firstName || !lastName || !email || !phone || !message){
    //         return next(new ErrorHandler("Please Fill Full Form !",400));
    //     }
    //     const response = await Message.create({firstName,lastName,email,phone,message});
    //     res.status(200).json({
    //         success:true,
    //         data:response,
    //         message:"Message Send Successfully !",
    //     });
    // }
    // catch(err){
    //     console.error(err);
    //     console.log(err);
    //     res.status(500).json(
    //         {
    //             success:false,
    //             data:"Internal Server Error in controller",
    //             message:err.message,
    //         }
    //     )
        
    // }
    
