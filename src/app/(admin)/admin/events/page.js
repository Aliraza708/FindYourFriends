
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

export default function events() {

    const events = [
        {
            title : 'Jumma Mubarak',
            description : 'Jumuah is one of the most important Islamic rituals and is considered one of its obligatory acts',
            location : "Karachi",
            thumbnail : 'https://images.unsplash.com/photo-1685522107390-7b633c82d855?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGp1bW1haCUyMG11YmFyYWt8ZW58MHx8MHx8fDA%3D',
            data : new Date().toLocaleDateString()
        },
        {
            title : 'Cricket',
            description : 'ricket is a bat-and-ball game played between two teams of eleven players on a field, at the centre of which is a 22-yard (20-metre; 66-foot) pitch with a wicket at each end',
            location : "Karachi",
            thumbnail : 'https://images.unsplash.com/photo-1599982946086-eb42d9e14eb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D',
            data : new Date().toLocaleDateString()

        }, 
        
        {
            title : 'Football',
            description : 'Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal',
            location : "Karachi",
            thumbnail : 'https://images.unsplash.com/photo-1603291697926-7e5822ed1ac5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D',          
            data : new Date().toLocaleDateString()

        },
    ]

    return (
        <div>
            
            <h1 className="font-bold text-2xl pl-6 p-2">Events</h1>
            <div className ='p-4'>
                <Table >
                    <TableCaption>A list of your recent Events.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead >Thumbnail</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead >Location</TableHead>
                            <TableHead >Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {events.map((events) => (
                            <TableRow key={events.title}>
                                <TableCell ><Image width={60} height={60} src={events.thumbnail} alt={events.title}/></TableCell>
                                <TableCell className='w-40' >{events.title}</TableCell>
                                <TableCell>{events.description}</TableCell>
                                <TableCell >{events.location}</TableCell>
                                <TableCell >{events.data}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                
                </Table>
                

            </div>
        </div>

    )
}