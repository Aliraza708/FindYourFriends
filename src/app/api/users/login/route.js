

import { connectDb } from "@/lib/DbConnect/dbConnect";
import { UserModels } from "@/lib/module/moduleUser";
import bcrypt from  'bcrypt'
import jwt from 'jsonwebtoken'


export async function POST(request) {
    await connectDb()
    const obj = await request.json()
    const user = await UserModels.findOne({ email: obj.email })
    if (!user) {
        return Response.json(
            { error: true, msg: "This email user not found " }
            , { status: 403 })
    }
    const ispasswordValid = await bcrypt.compare(obj.password, user.password)

    if(!ispasswordValid){
        return Response.json(
            { error: true, msg: "Password  is not valid." }
            , { status: 403 })
    }
  
    
  
    var token = jwt.sign({ id : user._id , roll : user.role }, process.env.JWT_KEY);
    // console.log(obj)
    return Response.json({
        msg: 'Users Login Successfully',
        user,
        token
    }, { status: 201 })

}



