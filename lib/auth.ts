import { cookies } from 'next/headers';

export function isAuthenticated() {
  const cookieStore = cookies();
  const authToken = cookieStore.get('admin_token');
  return authToken?.value === process.env.ADMIN_TOKEN;
}

export function getAuthToken() {
  const cookieStore = cookies();
  return cookieStore.get('admin_token')?.value;
}
