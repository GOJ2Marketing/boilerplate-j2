import { DocumentLocationResolver } from 'sanity/presentation';
import { map } from 'rxjs';

export const locate: DocumentLocationResolver = (params, context) => {
  console.log('Locate function called with params:', params);

  if (params.type === 'post') {
    console.log('Fetching document with ID:', params.id);

    const doc$ = context.documentStore.listenQuery(
      `*[_type == 'post' && _id == $id]{title, slug}`,
      { id: params.id }, // Use the id from params
      {} // Options object
    );

    return doc$.pipe(
      map((doc) => {
        console.log('Document fetched:', doc);

        if (!doc || !doc.slug?.current) {
          console.log('No document or slug found');
          return null;
        }

        const locationUrl = `/blog/${doc.slug.current}`;
        console.log('Location URL:', locationUrl);

        return {
          locations: [
            {
              title: doc?.title || 'Untitled Post',
              href: locationUrl,
            },
          ],
        };
      })
    );
  } else {
    console.log('Document type is not post');
  }

  return null;
};
