import { request } from "./api";

export interface User {
  id: number;
  name: string;
  email: string;
  admin: boolean;
  password: string;
}

export async function getUsers(): Promise<User[]> {
  const res = await request("/users", { method: "GET" });
  return res.json();
}

export async function getUserById(id: number): Promise<User> {
  const res = await request(`/users/${id}`, { method: "GET" });
  return res.json();
}

export async function createUser(data: Omit<User, "id">): Promise<User> {
  const res = await request("/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateUser(
  id: number,
  data: Partial<User>
): Promise<User> {
  const res = await request(`/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteUser(id: number): Promise<void> {
  await request(`/users/${id}`, { method: "DELETE" });
}
