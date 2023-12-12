import { client } from './client';

export const getBlogPageData = async (slug?: string, not: boolean = false) => {
    let query = '*[_type == "post"]';

    if (not && slug) {
        query += `[slug.current != "${slug}"]`;
    } else if (slug) {
        query += `[slug.current == "${slug}"]`;
    }

    query += `{
        _id,
        title,
        slug,
        "author": author->{
            _id,
            name,
            "image": image.asset->url
        },
        publishedAt,
        "categories": categories[]->{
            title,
            description
        },
        mainImage {
          "url": asset->url,
          alt
        },
        body,
    }`;

    const data = await client.fetch(query);

    return {
        data,
    };
};