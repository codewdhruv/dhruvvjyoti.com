import type { Metadata } from 'next';
import Link from 'next/link';
import { Timeline } from '../components/Timeline';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Work Experience - Dhrubajyoti Chakraborty',
  description: 'Professional journey from Machine Learning Engineer to Product Manager at Harness.io. Experience in AI, developer relations, and engineering analytics.',
  keywords: ['Work Experience', 'Product Manager', 'Harness.io', 'Developer Relations', 'Machine Learning Engineer', 'Career'],
  openGraph: {
    title: 'Work Experience - Dhrubajyoti Chakraborty',
    description: 'Professional journey from Machine Learning Engineer to Product Manager at Harness.io. Experience in AI, developer relations, and engineering analytics.',
  },
};

export default function WorkPage() {
  const timelineItems = [
    {
      year: "March, 2025 - Present",
      role: "Product Manager",
      company: "Harness.io",
      type: "Full-time",
      details: [
        "Driving SEI 2.0 — building engineering analytics grounded in AI-native abstractions.",
        "Built and shipped the agentic framework (efficiency agents) that help engineering teams & developers reason about productivity and unblock faster.",
        "Cut onboarding time from months to minutes by launching self-assembling org agents — game-changer for adoption.",
        "Working closely with customers every week to close the feedback loop and build what matters."
      ]
    },
    {
      year: "Aug, 2023 - Feb, 2025",
      role: "Developer Relations Engineer",
      company: "Harness.io",
      type: "Full-time",
      details: [
        "Took DevRel beyond talks & treated it as product feedback flywheel.",
        "Launched InsightX: introspection layer for AI code tools like Copilot.",
        "Added telemetry into the product: wired Segment → Amplitude → product decisions.",
        "Shipped Propels (an internal automation engine) for engineering automation workflows.",
      ]
    },
    {
      year: "July, 2022 - July, 2023",
      role: "Software Engineer",
      company: "Harness.io",
      type: "Internship",
      details: [
        "Shipped core features in the CI product — including test intelligence, cache intelligence, and pipeline insights.",
        "Built key integrations (Nexus, GAR) and OSS demos.",
        "Prototyped an AI-native interface to orchestrate pipelines — early ideas on LLMs as reasoning agents.",
        "Built an assistant that observed support patterns and responded with learned behavior (Harness AIDA)."
      ]
    },
    {
      year: "July, 2021 - July, 2022",
      role: "Developer Relations Engineer",
      company: "Commudle",
      type: "Internship",
      details: [
        "Founding DevEx team.",
        "Scaled platform to 200k+ devs, 250+ communities.",
        "Ran PLG streams - created content, docs, and hosted events."
      ]
    },
    {
      year: "2020 - 2021",
      role: "Machine Learning Engineer",
      company: "SARS",
      type: "Part-time",
      details: [
        "Built semantic recommender (RoBERTa, Data2Vec).",
        "Trained attribute extractors for content pipelines.",
        "Replaced Wordpress plugin logic with ML automation."
      ]
    },
    {
      year: "2020",
      role: "Machine Learning Engineer",
      company: "Azure Skynet",
      type: "Internship",
      details: [
        "First technical role. ML + infra.",
        "Shipped microservices on Azure using Docker, K8s, BentoML.",
        "Worked with TensorFlow.js and SciML."
      ]
    }
  ];

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Work Experience' }
  ];

  return (
    <section>
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        I like building systems that scale and solve real problems.        
        <br/>Here's a summary of what I've worked so far.
        </p>
      </div>

      <Timeline items={timelineItems} />
    </section>
  );
}