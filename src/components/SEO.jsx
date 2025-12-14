import { useEffect } from 'react';

export default function SEO({ title, description, image }) {
  useEffect(() => {
    const siteTitle = 'WOW Residency';
    const finalTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} - Premium Hostels in Kathmandu`;
    const finalDescription = description || "Experience luxury hostel living in Kathmandu with WOW Residency. Premium amenities, 24/7 security, and comfortable rooms.";
    
    // Update title
    document.title = finalTitle;
    
    // Helper to update or create meta tags
    const updateMeta = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    updateMeta('description', finalDescription);
    
    // Open Graph / Social Media
    updateMeta('og:title', finalTitle, 'property');
    updateMeta('og:description', finalDescription, 'property');
    updateMeta('og:type', 'website', 'property');
    if (image) {
        updateMeta('og:image', image, 'property');
    }
    
    // Twitter
    updateMeta('twitter:card', 'summary_large_image', 'name');
    updateMeta('twitter:title', finalTitle, 'name');
    updateMeta('twitter:description', finalDescription, 'name');
    if (image) {
        updateMeta('twitter:image', image, 'name');
    }

  }, [title, description, image]);

  return null;
}