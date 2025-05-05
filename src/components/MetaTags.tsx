
import { Helmet } from "react-helmet";

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}

const MetaTags = ({
  title = "MK Creative Lab | Arte e Tecnologia para seu Negócio",
  description = "Somos um laboratório criativo que integra arte e tecnologia para entregar soluções de alto impacto para o seu negócio.",
  keywords = "produção audiovisual, marketing digital, automação, impressão 3D, Curitiba",
  ogImage = "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800&h=450",
  url = "https://www.mkcreativelab.com.br"
}: MetaTagsProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default MetaTags;
