// pages/[year]/[month]/[day]/[slug].js
'use client'

import { usePathname } from 'next/navigation';
import { SinglePost } from '@/components/SinglePost';

export default function Post() {
  const pathname = usePathname();
  const pathnameComponents = pathname.split('/').filter(Boolean);
  const [year, month, day, slug] = pathnameComponents;

  return (
      <SinglePost slug={slug} />
  );
}