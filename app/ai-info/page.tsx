import type { Metadata } from 'next';
import { AIIdentityContent } from '../components/AIIdentityContent';
import { ResumeData } from '../components/ResumeData';
import { canonicalDescription } from '../components/ai-identity';

export const metadata: Metadata = {
  title: 'Dhrubajyoti Chakraborty — AI Identity',
  description: canonicalDescription,
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIInfoPage() {
  return (
    <>
      <ResumeData />
      <AIIdentityContent />
    </>
  );
}
