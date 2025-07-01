import { request } from "./api";
import { getUserById } from "./user";


export interface AuthUser {
  id: number;
  name: string;
  email: string;
  admin: boolean;
  token: string
}

export async function login(email: string, password: string): Promise<AuthUser> {

  const res = await request("/users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  const dataLogin = await res.json();
  localStorage.setItem("id", dataLogin.id.toString());
  localStorage.setItem("token", dataLogin.token);


  const dataUser = await getUserById(dataLogin.id)
  const data: AuthUser = {
    ...dataUser, ...dataLogin
  }

  return data;
}


export async function register(name: string, email: string, password: string) {
  const res = await request("/users", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
  const { token } = await res.json();
  return token;
}
