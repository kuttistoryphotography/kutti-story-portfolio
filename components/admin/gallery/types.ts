export interface GalleryItem {
  _id?: string;
  title: string;
  image: string;
  category: string;
  featured: boolean;

  seo?: {
    metaTitle: string;
    metaDescription: string;
    canonicalUrl: string;
    keywords: string[];
    ogTitle?: string;
    ogDescription?: string;
    geoTitle?: string;
    geoDescription?: string;
  };
}