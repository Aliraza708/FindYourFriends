
import { getCategories } from "@/action/addCategory"
import { getSubCategories } from "@/action/addtosubcategory"
import { AddSubCategory } from "@/components/addtosubcatgories/addtosubcatgories"
import CategoryDropDown from "@/components/catetgoriesDropdown/cateoryDropdown"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image"

export default async function subcatgories({searchParams}) {
   const subcategories = await getSubCategories(searchParams?.Category)
  const categories = await getCategories()
    return (
        <div>
            <div className="flex justify-between items-center pt-2 pr-4">
                 <h1 className="font-bold text-2xl pl-6 p-2">Subcatgories</h1>
                 <div className="flex gap-3">
                     <CategoryDropDown Category={categories}/>
                 <AddSubCategory/>
                 </div>
                
            </div>
           
            <div className ='p-2'>
                <Table >
                    <TableCaption>A list of your recent Subcatgories.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead >Thumbnail</TableHead>
                            <TableHead >Category</TableHead>
                            <TableHead className ='w-40' >Title</TableHead>
                            <TableHead>Description</TableHead>
                           
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {subcategories?.map((subcatgories) => (
                            <TableRow key={subcatgories._id}>
                                <TableCell ><Image width={60} height={60} src={subcatgories.thambnail} alt={subcatgories.title}/></TableCell>
                                <TableCell className='w-32' >{subcatgories.catgories.title}</TableCell>
                                <TableCell className='w-36' >{subcatgories.title}</TableCell>
                                <TableCell>{subcatgories.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                
                </Table>
                

            </div>
        </div>

    )
}