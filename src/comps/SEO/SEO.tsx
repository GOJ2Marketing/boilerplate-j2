import Head from "next/head";
import { SITE_NAME } from "../../../constants";

interface AppHeadProps {
  title: string;
  description: string;
  structuredData?: any;
  image: string;
  url: string;
  twitterImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterUrl?: string;
  facebookImage?: string;
  facebookTitle?: string;
  facebookDescription?: string;
  facebookUrl?: string;
  type?: string;
  canonical?: string;
  robots?: string;
  author?: string;
  publisher?: string;
  googleVerification?: string;
  language?: string;
}

export default function SEO({
  title,
  description,
  structuredData,
  image,
  url,
  twitterImage,
  twitterTitle,
  twitterDescription,
  twitterUrl,
  facebookImage,
  facebookTitle,
  facebookDescription,
  facebookUrl,
  type,
  canonical,
  robots,
  author,
  publisher,
  googleVerification,
  language,
}: AppHeadProps) {
  return (
    <Head>
      {/* Standard Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {canonical && <link rel="canonical" href={canonical} />}
      {robots && <meta name="robots" content={robots} />}
      {googleVerification && <meta name="google-site-verification" content={googleVerification} />}

      {/* Styles */}
      <link rel="stylesheet" href="https://use.typekit.net/mbf4xvb.css" />
      <link rel="icon" href="/favicon.ico" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Standard/Default SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {author && <meta name="author" content={author} />}
      {publisher && <meta name="publisher" content={publisher} />}

      {/* Facebook Tags */}
      <meta property="og:title" content={facebookTitle || title} key="title" />
      <meta property="og:image" content={facebookImage || image} />
      <meta property="og:url" content={facebookUrl || url} />
      <meta property="og:description" content={facebookDescription || description} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type || "website"} />
      <meta property="og:locale" content={language || "en_US"} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || title} />
      <meta name="twitter:description" content={twitterDescription || description} />
      <meta name="twitter:image" content={twitterImage || image} />
      <meta name="twitter:url" content={twitterUrl || url} />
      <meta name="twitter:site" content="" />
    </Head>
  );
}
