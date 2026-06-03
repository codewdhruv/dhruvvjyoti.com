import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Dhrubajyoti Chakraborty',
  description: 'Thoughts on technology, engineering systems, AI, and the intersection of machine learning with developer experience.',
  keywords: ['Blog', 'Technology', 'AI', 'Machine Learning', 'Developer Experience', 'Engineering'],
  openGraph: {
    title: 'Blog - Dhrubajyoti Chakraborty',
    description: 'Thoughts on technology, engineering systems, AI, and the intersection of machine learning with developer experience.',
  },
};

const BlogLink = ({ href, name }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
    {name}
  </a>
);

export default function BlogPage() {
  const fetchViews = async () => {
    try {
      const viewsCount = 0;
      return viewsCount;
    } catch (error) {
      console.error('Error fetching views count:', error);
      return null;
    }
  };

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Blog</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I write about technology, engineering systems, and the intersection of AI with developer experience.
          Sometimes I speak about it. Occasionally I try to teach it.
        </p>
      </div>
      <BlogLink href="https://example.com" name="External Link" />
    </section>
  );
}


