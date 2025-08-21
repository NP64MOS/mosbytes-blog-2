import { cookies } from 'next/headers';

export async function isAuthenticated() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('admin_token');
  return authToken?.value === process.env.ADMIN_TOKEN;
}

export async function getAuthToken() {
  const cookieStore = await cookies();
  return cookieStore.get('admin_token')?.value;
}
