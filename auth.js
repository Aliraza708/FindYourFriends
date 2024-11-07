import { connectDb } from "@/lib/DbConnect/dbConnect"
import { UserModels } from "@/lib/module/moduleUser"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

const handleUser = async (profile) => {
  await connectDb()
  let user = await UserModels.findOne({ email : profile.email })
  if (user) return user
  let newUser = new UserModels({
    fullName: profile.name,
    email: profile.email,
    profileImage: profile.picture
  })
  newUser = await newUser.save()
  return newUser
}

export  const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {

      const user =  handleUser(profile)

      profile.role = user.role;
      profile._id = user._id;
      return true
    },
     jwt({ token, user }) {
      console.log("token", token)
      console.log("user", user)
      if (user) { 
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id;
      session.user._id = token._id;
      session.user.role = token.role;
      return session
    },
  },

})
 