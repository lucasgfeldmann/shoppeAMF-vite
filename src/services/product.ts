import { request } from "./api";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export async function getAll(): Promise<Product[]> {
  const res = await request("/products", { method: "GET" });
  return res.json();
}

export async function getById(id: number): Promise<Product> {
  const res = await request(`/products/${id}`, { method: "GET" });
  return res.json();
}

export async function create(data: Omit<Product, "_id">): Promise<Product> {
  const res = await request("/products", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateProduct(
  id: string,
  data: Partial<Omit<Product, "_id">>
): Promise<Product> {
  const res = await request(`/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteProduct(id: string): Promise<void> {
  await request(`/products/${id}`, { method: "DELETE" });
}
