import { personStructuredData } from './ai-identity';

export function ResumeData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
    />
  );
}
