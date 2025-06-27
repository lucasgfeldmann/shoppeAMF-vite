import { request } from "./api";

export async function login(email: string, password: string) {
  const res = await request("/users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  const { token } = await res.json();
  console.log("Token => " + token)
  return token;
}


export async function register(name: string, email: string, password: string) {
  const res = await request("/users", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
  const { token } = await res.json();
  return token;
}
