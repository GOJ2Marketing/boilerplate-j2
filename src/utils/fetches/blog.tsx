import { client } from './client';

export const getBlogPageData = async (slug?: string, not: boolean = false) => {
    let query = '*[_type == "post"]';

    if (not && slug) {
        query += `[slug.current != "${slug}"]`;
    } else if (slug) {
        query += `[slug.current == "${slug}"]`;
    }

    query += `{
        ...
    }`;

    const data = await client.fetch(query);

    return {
        data,
    };
};