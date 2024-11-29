import { checkUser } from '@/lib/checkUser';
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return  <SignUp
  redirectUrl="/form"/>
}