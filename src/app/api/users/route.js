// app/api/users/route.js
// import mongoPromise from '@/app/_lib/mongodb';
import { addUser, getAllUsers } from '@/app/_lib/userfetch';
export async function generateStaticParams() {
  
   const users = await getAllUsers()
   return users.map(user => (user.toString()));
 }

export async function GET() {
   const users = await getAllUsers()
   return new Response(JSON.stringify(users), { status: 200 });a
 }

export async function POST(request) {
   const user = await request.json();  // Get the user data from the request body
   const result = await addUser(user);
   return new Response(JSON.stringify(result), { status: 201 });
}
