import { connectDb } from "@/lib/DbConnect/dbConnect";
import { SubCategoriesModels } from "@/lib/module/moduleSubCatogories";

export async function GET(request) {
    await connectDb()
 const resqUrl = request.url
 const {searchParams} = new URL(resqUrl)

 const query = {} ;
 if(searchParams.get("catgories")){
    query.catgories = searchParams.get("catgories")
 }
    const subcatgories = await SubCategoriesModels.find(query).populate("catgories","title")
    return Response.json({
        masg : "subcatgories is fetch successfully",
        subcatgories
    },{status : 200})

}
 

export async function POST(request) {
    await connectDb()
    const obj = await request.json()
    const newsubcatgory = new SubCategoriesModels(obj)
    newsubcatgory.save()
    return Response.json({
        masg : 'add subcatgories successfully ',
        subcatgories : newsubcatgory
    },{status : 201})

}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 
