import { convertTimestamp } from "@/utils/convertTimestamp";
import { builder } from "@/utils/fetches/client";
import Image from "next/image";

export default function BlogCards({posts}:any) {
    return (
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post:any) => {
                const { title, slug, mainImage, author, categories, body, publishedAt } = post;
                const date = convertTimestamp(publishedAt);

                return (
                    <article key={post.id} className="flex flex-col items-start justify-between">
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src={mainImage.url}
                                alt=""
                                fill
                                className="rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                            />
                        </div>
                        <div className="max-w-xl">
                        <div className="mt-8 flex items-center gap-x-4 text-xs">
                            <time dateTime={publishedAt} className="text-gray-500">
                                {date}
                            </time>
                            {/* <a
                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                            {post.category.title}
                            </a> */}
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
                            <a href={`/blog/${post.slug.current}`}>
                                <span className="absolute inset-0" />
                                {title}
                            </a>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6">{post.description}</p>
                        </div>
                        <div className="relative mt-8 flex items-center gap-x-4">
                            <Image src={author.image} alt={author.image.alt} width={40} height={40} className="h-10 w-10 rounded-full bg-black" />
                            <div className="text-sm leading-6">
                            <p className="font-semibold text-gray-900">
                                <a href={post.author.href}>
                                <span className="absolute inset-0" />
                                {author.name}
                                </a>
                            </p>
                            <p className="text-gray-600">{post.author.role}</p>
                            </div>
                        </div>
                        </div>
                    </article>
                )})}
        </div>
    )
}