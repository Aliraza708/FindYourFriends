import mongoose from "mongoose";


export async function connectDb(){
    try{
        let connect ;
     
         connect = await mongoose.connect(process.env.MONGODB_URI)
         console.log('connect is successfully')
      
        
    }catch{
         console.log("connect is fail")
    }
}