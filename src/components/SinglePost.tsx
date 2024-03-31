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

async function getPosts(slug: String) {
    const response = await fetch(
        `${WORDPRESS_API_URL}/posts?slug=${slug}`
    );
    const posts = await response.json();
    return posts;
}

export const SinglePost = async (props: {slug: String}) =>{
    const posts = await getPosts(props.slug);
    if (!posts) return (<p>Cargando.....</p>);
    return (
        <>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <ul>
                    {posts.map((post:any) => {
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
                                            <Link href={`/${post.slug}`} className="text-gray-900 dark:text-gray-100">
                                            {post.title.rendered}
                                            </Link>
                                        </h3>
                                        <div className="flex flex-wrap">
                                            {posts.tags?.length>0 && post.tags.map((tag) => <Tag key={tag} text={tag} />)}
                                        </div>
                                        </div>
                                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                                        </div>
                                        <div className="text-right text-base font-medium leading-6">
                                            <Link
                                            href={`/`}
                                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                            aria-label={`Volver al incio`}
                                            >
                                            &larr; Volver
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