
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link"
import { auth } from "../../../../auth"
import { redirect } from "next/navigation"

export default async function Layout({children}) {

    const session = await auth()
 console.log("=====>",session)  
 if(!session) redirect("/signIn")  
    return (<html>
        <body>
            <Tabs defaultValue="dashbord" className="w-full">
                <TabsList className="w-full p-6 text-2xl">

                    <Link href={'/admin/dashbord'}>
                        <TabsTrigger value="dashbord">Dashbord</TabsTrigger>

                    </Link>
                    <Link href={'/admin/users'}>
                        <TabsTrigger value="users">Users</TabsTrigger>

                    </Link>
                    <Link href={'/admin/events'}>
                        <TabsTrigger value="events">Events</TabsTrigger>

                    </Link>
                    <Link href={'/admin/catgories'}>
                        <TabsTrigger value="catgories">Catgories</TabsTrigger>

                    </Link>
                    <Link href={'/admin/subcatgories'}>
                        <TabsTrigger value="subcatgories">Subcatgories</TabsTrigger>

                    </Link>
                </TabsList>
              
                <TabsContent value="dashbord">{children}</TabsContent>
                <TabsContent value="users">{children}</TabsContent>
                <TabsContent value="events">{children}</TabsContent>
                <TabsContent value="subcatgories">{children}</TabsContent>
                <TabsContent value="catgories">{children}</TabsContent>

              

            </Tabs>

        </body>
    </html>
    )
}