import { request } from "./api";

export interface Order {
  id: number;
  done_at: Date;
  user_id: string;
  product_id: string;
  quantity: number;
  total_price: number;
  product_name?: string
}

export async function getAll(): Promise<Order[]> {
  const res = await request("/orders", { method: "GET" });
  return res.json();
}

export async function getHistory(): Promise<Order[]> {
  const res = await request("/orders/history", { method: "GET" });
  return res.json();
}

export async function getById(id: number): Promise<Order> {
  const res = await request(`/orders/${id}`, { method: "GET" });
  return res.json();
}

export async function buy(product_id: number, quantity: number): Promise<Order> {
  const res = await request(`/orders/buy/${product_id}`, { method: "POST", body: JSON.stringify({ quantity }), });
  return res.json();
}

export async function create(data: Omit<Order, "id">): Promise<Order> {
  const res = await request("/orders", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateOrder(
  id: number,
  data: Partial<Order>
): Promise<Order> {
  const res = await request(`/orders/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteOrder(id: number): Promise<void> {
  await request(`/orders/${id}`, { method: "DELETE" });
}
