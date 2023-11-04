import { apiUrl } from "./api";

export async function loginUser(userData: object) {
  const response = await fetch(`${apiUrl}/customers/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    return false;
  }

  return data;
}
