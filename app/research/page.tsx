import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Research - Dhrubajyoti Chakraborty',
  description: 'Research in reasoning systems, AI-powered engineering metrics, neuro-sentiments, and quantum cognitive modeling. Exploring how to help humans reason better.',
  keywords: ['Research', 'AI', 'Reasoning Systems', 'Neuro-sentiments', 'Quantum Cognitive Modeling', 'Engineering Analytics'],
  openGraph: {
    title: 'Research - Dhrubajyoti Chakraborty',
    description: 'Research in reasoning systems, AI-powered engineering metrics, neuro-sentiments, and quantum cognitive modeling.',
  },
};

export default function ResearchPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Research</h1>
      <p>
      Also on <a href='https://scholar.google.com/citations?user=VqxYrdYAAAAJ&hl=en'>Google Scholar</a>
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <div className="flex flex-col gap-4">
        <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 flex justify-between items-start">
          <div>
            <h2 className="font-medium text-xl mb-2">Social engineering using neuro-sentiments</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">2023</p>
            <p className="text-sm mb-2">
            Explored how neural signals encode emotional states.
            Built high-resolution neurosentiment maps and predictive systems for behavioral interventions.
            </p>
          </div>
          <a 
            href="#"
            className="bg-neutral-100 dark:bg-neutral-800 px-4 py-2 rounded-md text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            Read Paper
          </a>
        </div>

        <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 flex justify-between items-start">
          <div>
            <h2 className="font-medium text-xl mb-2">Quantum theory to model cognitive phenomena in the human mind</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">2021</p>
            <p className="text-sm mb-2">
            Applied principles from quantum mechanics to cognitive science.
            Focused on superposition and uncertainty in human belief and decision-making.
            </p>
          </div>
          <a 
            href="#"
            className="bg-neutral-100 dark:bg-neutral-800 px-4 py-2 rounded-md text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            Read Paper
          </a>
        </div>

        <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 flex justify-between items-start">
          <div>
            <h2 className="font-medium text-xl mb-2">Robot learning through micro-expressions</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">2021</p>
            <p className="text-sm mb-2">
            Used microexpressions as implicit feedback for robotic learning.
            Designed systems for adaptive and more intuitive human-robot interaction.
            </p>
          </div>
          <a 
            href="#"
            className="bg-neutral-100 dark:bg-neutral-800 px-4 py-2 rounded-md text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            Read Paper
          </a>
        </div>
      </div>
    </section>
  );
}