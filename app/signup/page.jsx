import React from 'react'
import Signup from '@/components/auth/Signup'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

const SignUp = async () => {
  const session = await getServerSession(authOptions);
  if(session) redirect("/dashboard")
  return <Signup />

}

export default SignUp