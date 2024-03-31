'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'

const locale = 'us-US';

const WORDPRESS_API_URL='https://patolin.com/wp-json/wp/v2';

async function getPosts() {
    const response = await fetch(
        `${WORDPRESS_API_URL}/posts`
    );
    const posts = await response.json();
    return posts;
}

export const Posts = async () =>{
    const posts = await getPosts();
    if (!posts) return (<p>Cargando.....</p>);
    return (
        <>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <ul>
                    {posts.map((post:any) => {
                            const postDate = post?.date.split('T')[0];
                            const [Y,m,d] = postDate.split('-');
                            return (
                                <li key={post.slug} className="py-4">
                                    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    <dl>
                                        <dt className="sr-only">Published on</dt>
                                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                        <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
                                        </dd>
                                    </dl>
                                    <div className="space-y-3 xl:col-span-3">
                                        <div>
                                        <h3 className="text-2xl font-bold leading-8 tracking-tight">
                                            <Link href={`/${Y}/${m}/${d}/${post.slug}`} className="text-gray-900 dark:text-gray-100">
                                            {post.title.rendered}
                                            </Link>
                                        </h3>
                                        <div className="flex flex-wrap">
                                            {posts.tags?.length>0 && post.tags.map((tag) => <Tag key={tag} text={tag} />)}
                                        </div>
                                        </div>
                                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
                                        </div>
                                        <div className="text-base font-medium leading-6">
                                            <Link
                                            href={`/${Y}/${m}/${d}/${post.slug}`}
                                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                            aria-label={`Read more: "${post.title}"`}
                                            >
                                            Leer más &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                    </article>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </>
    )
}