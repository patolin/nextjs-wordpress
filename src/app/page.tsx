import Image from "next/image";
import { Posts } from "@/components/Posts";


export default function Page() {
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
        <Posts />
      </main>
        
      </>
  );
}
