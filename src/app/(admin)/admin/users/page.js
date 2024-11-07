import { getUsers } from "@/action/Users"
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default async function users() {

    const User = await getUsers()
    console.log("User===<", User)


    return (
        <div>

            <h1 className="font-bold text-2xl pl-6 p-2">Users</h1>
            <div className='p-4'>
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
                                <TableCell >
                                    <Avatar>
                                        <AvatarImage src={user.profileImage} alt={user._id}/>
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    </TableCell>
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