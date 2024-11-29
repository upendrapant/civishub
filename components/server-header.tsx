// components/ServerHeader.tsx
import { checkUser } from "@/lib/checkUser"; // Import your server-side function
import {Header} from "@/components/dashboard/header"; // Import your existing client-side component

export default async function ServerHeader() {
  const user = await checkUser(); // Fetch the user from the server

  return (
    // Pass user data to the client-side Header component
    <Header user={user} />
  );
}
