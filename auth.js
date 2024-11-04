import { connectDb } from "@/lib/DbConnect/dbConnect"
import { UserModels } from "@/lib/module/moduleUser"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

const handleUser = async (profile)=>{
  await connectDb()
  let user = await UserModels.findOne({email : profile.email})
  if(user) return user
  let newUser = new UserModels({
    fullName: profile.name,
    email: profile.email,
    profileImage: profile.picture
  })
  newUser = await newUser.save()
  return newUser
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
 callbacks: {
    async signIn({ account, profile }) {

      console.log("profile",profile)
      const user = handleUser(profile)
      if (account.provider === "google") {
        return profile.email_verified && profile.email.endsWith("@example.com")
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
    jwt({ token, user }) {
      console.log("token",token)
      console.log("user",user)
      if (user) { // User is available during sign-in
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id
      return session
    },
  },
  
})
