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

export default function users() {

    const User = [
        {
            fullName : 'aliraza',
            email : 'aliraza@gmail.com',
            location : "Karachi",
            events : 5,
            profileImage : 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
        },
        {
            fullName : 'raza',
            email : 'raza@gmail.com',
            location : "Karachi",
            events : 5,
            profileImage : 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
        },      {
            fullName : 'ali',
            email : 'ali@gmail.com',
            location : "Karachi",
            events : 5,
            profileImage : 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
        }
    ]

    return (
        <div>
            
            <h1 className="font-bold text-2xl pl-6 p-2">Users</h1>
            <div className ='p-4'>
                <Table >
                    <TableCaption>A list of your recent Users.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead >ProfileImage</TableHead>
                            <TableHead>FullName</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead >Location</TableHead>
                            <TableHead >Events</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {User.map((user) => (
                            <TableRow key={user.fullName}>
                                <TableCell ><Image width={40} height={40} src={user.profileImage} alt={user.fullName}/></TableCell>
                                <TableCell >{user.fullName}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell >{user.location}</TableCell>
                                <TableCell >{user.events}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                
                </Table>
                

            </div>
        </div>

    )
}