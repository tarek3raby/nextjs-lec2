import mongoPromise from "@/app/_lib/mongodb";
import { ObjectId } from "mongodb";

// export async function generateStaticParams() {

//     const users = await getAllUsers()
//     return users.map(user => ({id: user._id.toString()}));
//   }

export async function GET(request, { params }) {
  const id = params.id;
  const client = await mongoPromise;
  const db = client.db();
  //   const user = await db.collection("users").findOne({ _id: new ObjectId(id) });

  try {
    const user = await db
      .collection("users")
      .findOne({ _id: new ObjectId(id) });

    if (user) {
      return user;
    } else {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }
  } catch (error) {
    // console.error('Error fetching user:', error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
