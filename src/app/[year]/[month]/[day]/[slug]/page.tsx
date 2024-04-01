// pages/[year]/[month]/[day]/[slug].js
// 'use client'

import { usePathname } from 'next/navigation';
import { SinglePost } from '@/components/SinglePost';

export async function generateStaticParams() {
  const WORDPRESS_API_URL='https://patolin.com/wp-json/wp/v2';

  const posts = await fetch('https://patolin.com/wp-json/wp/v2/posts').then((res) => res.json())
 
  const maps =  posts.map((post: any) => ({
    year: post.date?.split('T')[0]?.split('-')[0],
    month: post.date?.split('T')[0]?.split('-')[1],
    day: post.date?.split('T')[0]?.split('-')[2],
    slug: post.slug
  }))
  return maps;
}

export default function Post() {
  const pathname = usePathname();
  
  if (pathname) {
    const pathnameComponents = pathname?.split('/').filter(Boolean);
    const [year, month, day, slug] = pathnameComponents;
    return (
        <SinglePost slug={slug} />
    );

  }
  return (
    <p>Error al validar la URL</p>
  )

}