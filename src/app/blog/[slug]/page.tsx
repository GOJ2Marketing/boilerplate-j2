import BreadcrumbTrail from "@/components/Breadcrumbs";
import { convertTimestamp } from "@/utils/convertTimestamp";
import { getBlogPageData } from "@/utils/fetches/blog";
import Image from "next/image";

type BlogPostProps = {
    params: {
        slug: string;
    }
}

export default async function BlogPost({ params }:BlogPostProps) {
    const data = (await getBlogPageData(params.slug)).data[0];
    const { title, slug, mainImage, author, categories, body, publishedAt } = data;
    const date = convertTimestamp(publishedAt);

    // console.log("POST DATA: ", data)

    return (
        <section>
            <div data-row>
                <div>
                    <BreadcrumbTrail />
                </div>
                <h1 className="space text-center">{title}</h1>
                <p>{date}</p>
                <div className="aspect-video bg-red-500 relative">
                    <Image src={mainImage.url} alt={mainImage.alt} fill className="object-cover" />
                </div>
            </div>
        </section>
    )
}