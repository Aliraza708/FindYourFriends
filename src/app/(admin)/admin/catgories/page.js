
import { getCategories } from "@/action/addCategory";
import { AddCategory } from "@/components/addtocatgories/addtocatgories"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
// import Image from "next/image"

export default async function catgories() {

     const categories = await getCategories();

    return (
        <div>
            <div className="flex justify-between items-center p-2 pr-4">
                 <h1 className="font-bold text-2xl pl-6 p-2">Catgories</h1>
                 <AddCategory/>
            </div>
           
            <div className ='p-2'>
                <Table >
                    <TableCaption>A list of your recent Catgories.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead >Thumbnail</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Description</TableHead>
                           
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {categories?.map((Catgories) => (
                            <TableRow key={Catgories.title}>
                                <TableCell ><img width={60} height={60} src={Catgories.thambnail} alt={Catgories.title}/></TableCell>
                                <TableCell className='w-40' >{Catgories.title}</TableCell>
                                <TableCell>{Catgories.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                
                </Table>
                

            </div>
        </div>

    )
}