
import { AddSubCategory } from "@/components/addtosubcatgories/addtosubcatgories"
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

export default function subcatgories() {

    const subcatgories = [
        {
            title : 'Jumma Mubrak',
            catgories : 'Special Day',
            description : 'Jumuah is one of the most important Islamic rituals and is considered one of its obligatory acts',
            thumbnail : 'https://images.unsplash.com/photo-1685522107390-7b633c82d855?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGp1bW1haCUyMG11YmFyYWt8ZW58MHx8MHx8fDA%3D',
        },
        {
            title : 'Cricket',
            catgories : 'Sport',
            description : 'ricket is a bat-and-ball game played between two teams of eleven players on a field, at the centre of which is a 22-yard (20-metre; 66-foot) pitch with a wicket at each end',
            thumbnail : 'https://images.unsplash.com/photo-1599982946086-eb42d9e14eb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D',
          
        }, 
        
        {
            title : 'Football',
            catgories : 'Sport',
            description : 'Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal',
            thumbnail : 'https://images.unsplash.com/photo-1603291697926-7e5822ed1ac5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D',          

        },
    ]

    return (
        <div>
            <div className="flex justify-between items-center pt-2 pr-4">
                 <h1 className="font-bold text-2xl pl-6 p-2">Subcatgories</h1>
                 <AddSubCategory/>
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
                        {subcatgories.map((subcatgories) => (
                            <TableRow key={subcatgories.title}>
                                <TableCell ><Image width={60} height={60} src={subcatgories.thumbnail} alt={subcatgories.title}/></TableCell>
                                <TableCell className='w-32' >{subcatgories.catgories}</TableCell>
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