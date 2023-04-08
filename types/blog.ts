export interface Article {
    title: string;
    excerpt: string;
    slug: string;
    date: Date;
    tags: string[];
    image: string;
    featured: boolean;
}
