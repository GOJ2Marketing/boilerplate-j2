import { getBlogPageData } from "@/utils/fetches/blog"

export default async function Blog() {
    const data = await getBlogPageData();

    return (
        <section>
            <div data-row>
                <h1 className="text-center">Blog Page</h1>
                <p>{JSON.stringify(data)}</p>
            </div>
        </section>    
    )
}