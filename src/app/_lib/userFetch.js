import { ObjectId } from "mongodb";
import mongoPromise from "./mongodb";

export async function getAllUsers() {
  const client = await mongoPromise;
  const db = client.db();
  const users = await db.collection("users").find().toArray();
  return users;
}

export async function getUserById(id) {
  const client = await mongoPromise;
  const db = client.db();
  const user = await db.collection("users").findOne({ _id: new ObjectId(id) });
  return user;
}

// add user function
export async function addUser(request) {
  const client = await mongoPromise;
  const db = client.db();
  const user = await request.json(); // Get the user data from the request body
  await db.collection("users").insertOne(user);
 return user;
}
