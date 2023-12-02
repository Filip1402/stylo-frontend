import { apiUrl } from "./api";

export async function getLayout() {
  const response = await fetch(`${apiUrl}/layout`);
  const data = await response.json();

  if (!response.ok) {
    console.log(data.error);
    return data.error;
  }
  return data;
}
import { apiUrl } from "./api";

export async function getProduct(id: string) {
  const response = await fetch(`${apiUrl}/products/${id}`);
  const data = await response.json();

  if (!response.ok) {
    console.log(data.error);
    return data.error;
  } else {
    console.log(data);
  }
  return data;
}
