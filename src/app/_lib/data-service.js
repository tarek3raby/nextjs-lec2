import { GET } from "../api/users/route";

export async function getUserById(id) {
  const res = await fetch(`http://localhost:3000/api/users/${id}`, {
    method: "GET",
  });
  const user = await res.json();
  return user;
}

export async function getAllUsers() {
  const res = await GET();

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }

  const users = await res.json();
  return users;
}
