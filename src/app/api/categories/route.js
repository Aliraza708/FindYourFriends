import { connectDb } from "@/lib/DbConnect/dbConnect";
import { CategoriesModels } from "@/lib/module/moduleCatgories";

export async function GET(request) {
    await connectDb()
    const categories = await CategoriesModels.find()
    return Response.json({
        msg: 'categories Fetch Sucessfully',
        categories
    },
        {
            status: 200

        })


}



export async function POST(request) {
    await connectDb()
    const obj = await request.json()
    const newcategories = new CategoriesModels(obj)
    newcategories.save()
    return Response.json({
        masg: "categories Update Sucessfully",
        categories: newcategories
    }, {
        status: 201
    })
}

export async function PUT(request) { }

export async function DELETE(request) { }


