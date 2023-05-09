This is a boilerplate for J2 projects. Read on to see what is included

## Getting Started

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Components

The following is a list of the custom components included in the boilerplate

### Section
```jsx
<Section 
    className={Styles.class}
    id={string} // Helps search engines understand the page breakdown, and provides anchor points for screen readers and navigation links 
    ariaLabel={string} // Important for screen readers and overall accessibility 
    data-anything={string} // Useful for js and for adding other info about the data provided in the section: data-author="John Doe" data-publication-date="2023-04-30"
    ref={string}
>
    ...children
</Section>
```

### Row
```jsx
<Row className={}>
    ...children
</Row>
```

### Grid
```jsx
<Grid 
    className={Styles.class} 
    columns={number} 
    gap={number} 
    template={"1fr 1fr 1fr"} // Default layout for anything larger than a laptop
    laptop={"2fr 1fr 1fr"} // Replaces the value of template when laptop size in reached
    tablet={"1fr 1fr"} // and so on...
    phone={"100%"} // and so on...
>
    ...children
</Grid>
```

### Constants

#### Breakpoints
Just like in the stylesheets, it is easier to manage site styles if they are managed globally. Import the breakpoints.tsx file to set breakpoints in your javascript.

```jsx
...
if (phone && screenWidth <= breakpoints.phone) {
    setGridStyle((prevState) => ({
    ...prevState,
    gridTemplateColumns: phone,
    }));
} ...
```

#### Content
```jsx
import { SITE_NAME } from "../../../constants";
...
<meta property="og:site_name" content={SITE_NAME} />
...
```

### SEO
Instead of adding a head to every page, you can simply drop an SEO component onto your page and add props:

```jsx
<SEO
    title="Page Title"
    description="Page description..."
    image="/featured-image.jpg"
    url="/page-url"
    structuredData={jsonVariable} // add json variable with your sturcured data to the actual page and send it as a prop
    // Use these 5 at the very least
    facebookTitle="Page Title" // for if you want the page title to appear differently on facebook. Same for other facebook/twitter props
    facebookDescription=""
    facebookImage=""
    // Check component to see all
/>
```
