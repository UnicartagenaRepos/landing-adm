import Head from "next/head";

interface SEOProps {
  pageTitle: string;
  pageDescription: string;
}

const SEO: React.FC<SEOProps> = ({ pageTitle, pageDescription }) => (
  <Head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    {/* Add other SEO meta tags as necessary */}
  </Head>
);

export default SEO;
