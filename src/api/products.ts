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
