

import { connectDb } from "@/lib/DbConnect/dbConnect";
import { UserModels } from "@/lib/module/moduleUser";
import bcrypt from  'bcrypt'
import jwt from 'jsonwebtoken'

export async function GET(request) {
    await connectDb()
    const users = await UserModels.find()
    return Response.json({
        msg: 'api get successfully user connect',
        users
    }, { status: 200 })


}



export async function POST(request) {
    await connectDb()
    const obj = await request.json()
    const user = await UserModels.findOne({ email: obj.email })
    if (user) {
        return Response.json(
            { error: true, msg: "User with this email already  Exist" }
            , { status: 403 })
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(obj.password, saltRounds)
    obj.password = hashedPassword;
    
    const newuser = new UserModels(obj)
    newuser.save()
    var token = jwt.sign({ id : newuser._id , roll : newuser.role }, process.env.JWT_KEY);
    // console.log(obj)
    return Response.json({
        msg: 'api update successfully user connect',
        users : newuser,
        token
    }, { status: 201 })

}

export async function PUT(request) { }

export async function DELETE(request) { }


