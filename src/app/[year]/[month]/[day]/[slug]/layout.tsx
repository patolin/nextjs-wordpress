import { Posts } from '@/components/Posts';

export default function Layout({ children }: any) {
    return (
      <>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Blog
          </h1>
        </div>
        <main>
          {children}
        </main>
      </>
    )
  }