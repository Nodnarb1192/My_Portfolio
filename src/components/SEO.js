import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://my-portfolio-seven-ecru-65.vercel.app';

function SEO({ title, description, path = '/', image = '/hero.png' }) {
  const fullTitle = title
    ? `${title} | Brandon Harrelson`
    : 'Brandon Harrelson — Python Developer & Data Scientist';

  const fullImage = `${BASE_URL}${image}`;
  const canonical = `${BASE_URL}${path}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={canonical} />
      <meta property="og:image"       content={fullImage} />
      <meta property="og:type"        content="website" />
      <meta property="og:locale"      content="en_US" />
      <meta property="og:site_name"   content="Brandon Harrelson Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={fullImage} />
    </Helmet>
  );
}

export default SEO;
