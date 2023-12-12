import BreadcrumbTrail from "@/components/Breadcrumbs";
import { getBlogPageData } from "@/utils/fetches/blog";
import { builder } from "@/utils/fetches/client";
import Image from "next/image";

type BlogPostProps = {
    params: {
        slug: string;
    }
}

export default async function BlogPost({ params }:BlogPostProps) {
    const data = (await getBlogPageData(params.slug)).data[0];
    const { title, slug, mainImage, author, categories, body, publishedAt } = data;
    const featuredImage = builder.image(mainImage.asset._ref).url();

    // console.log("POST DATA: ", data)

    return (
        <section>
            <div data-row>
                <div>
                    <BreadcrumbTrail />
                </div>
                <h1 className="space text-center">{title}</h1>
                <div className="aspect-video bg-red-500 relative">
                    <Image src={featuredImage} alt={mainImage.alt} fill className="object-cover" />
                </div>
            </div>
        </section>
    )
}