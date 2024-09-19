// // app/api/users/route.js
import mongoPromise from "@/app/_lib/mongodb";


// export async function generateStaticParams() {
//   const users = await getAllUsers();
//   const ids = users.map((user) => {
//     user._id.toString();
//   });
//   return ids;
// }

export async function GET() {
  const client = await mongoPromise;
  const db = client.db();
  const users = await db.collection("users").find().toArray();
  return new Response(JSON.stringify(users), { status: 200 });
}

export async function POST(request) {
   const user = await request.json(); // Get the user data from the request body
   const client = await mongoPromise;
   const db = client.db();
  const result =  await db.collection("users").insertOne(user);
  return new Response(JSON.stringify(result), { status: 201 });
}
