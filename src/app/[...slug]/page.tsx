import Image from "next/image";
import { SinglePost } from "@/components/SinglePost";

export async function generateStaticParams() {
    const WORDPRESS_API_URL='https://patolin.com/wp-json/wp/v2';
  
    const posts = await fetch('https://patolin.com/wp-json/wp/v2/posts').then((res) => res.json())
   
    const maps =  posts.map((post: any) => ({
      slug: [post.date?.split('T')[0]?.split('-')[0], post.date?.split('T')[0]?.split('-')[1], post.date?.split('T')[0]?.split('-')[2], post.slug]
    }))
    return maps;
  }

export default function Page({ params }: { params: { slug: string[] } }) {
    const slug = params?.slug[3];
  return (
    <>
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Blog
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Publicaciones del blog
          </p>
        </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <SinglePost slug={slug} />
      </main>
        
      </>
  );
}
