import { Suspense } from 'react';
import { getPosts } from '@/lib/db';
import DashboardContent from '@/components/DashboardContent';

export default async function DashboardPage() {
  const posts = await Promise.resolve(getPosts(true)); // Include unpublished posts

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent posts={posts} />
    </Suspense>
  );
}
