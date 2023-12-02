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

export async function getHomepage() {
  const response = await fetch(`${apiUrl}/homepage`);
  const data = await response.json();

  if (!response.ok) {
    console.log(data.error);
    return data.error;
  }
  console.log(data);

  return data;
}
