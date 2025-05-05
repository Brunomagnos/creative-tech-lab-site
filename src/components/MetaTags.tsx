
import React, { useEffect } from "react";

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
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Get all meta tags
    const metaTags = document.getElementsByTagName('meta');
    
    // Update or create meta description
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', description);
    } else {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      descriptionTag.setAttribute('content', description);
      document.head.appendChild(descriptionTag);
    }
    
    // Update or create meta keywords
    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (keywordsTag) {
      keywordsTag.setAttribute('content', keywords);
    } else {
      keywordsTag = document.createElement('meta');
      keywordsTag.setAttribute('name', 'keywords');
      keywordsTag.setAttribute('content', keywords);
      document.head.appendChild(keywordsTag);
    }
    
    // Open Graph tags
    const ogTags = {
      'og:type': 'website',
      'og:url': url,
      'og:title': title,
      'og:description': description,
      'og:image': ogImage,
      'twitter:card': 'summary_large_image',
      'twitter:url': url,
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': ogImage
    };
    
    // Update Open Graph and Twitter tags
    Object.entries(ogTags).forEach(([property, content]) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    });
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', url);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', url);
      document.head.appendChild(canonicalLink);
    }
    
    // Cleanup function to reset title when component unmounts
    return () => {
      // We don't reset other meta tags as they might be needed across the site
    };
  }, [title, description, keywords, ogImage, url]);

  // This component doesn't render anything to the DOM
  return null;
};

export default MetaTags;
