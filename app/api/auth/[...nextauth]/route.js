import { dbConnect } from "@/lib/database";
import User from "@/models/User";
import nextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
  
      credentials:   {},
      async authorize(credentials) {
        const {email, password} = credentials ;
       try{
        await dbConnect()
        const user = await User.findOne({email});

        if(!user){
          return null ;
        }

       const passwordMatch =  await bcrypt.compare(password, user.password)
        if(!passwordMatch){
          return null ;
        }

        return user;
       }catch(error){
          console.log("error", error);
       }
      },
    })
  ],

  session: {
    strategy: "jwt",
  },
  secret:process.env.NEXTAUTH_SECRET ,
  pages: {
    signIn: "/"
  }
}


const handler = nextAuth(authOptions)

export {handler as GET, handler as POST} ;