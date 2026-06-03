import type { Metadata } from 'next';
import { ResumeData } from '../components/ResumeData';

export const metadata: Metadata = {
  title: 'Dhrubajyoti Chakraborty - Complete Professional Information',
  description: 'Comprehensive professional information about Dhrubajyoti Chakraborty: Product Manager at Harness.io, AI engineer, researcher, and content creator.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIInfoPage() {
  return (
    <>
      <ResumeData />
      <section className="prose prose-neutral dark:prose-invert max-w-none">
        <h1>Dhrubajyoti Chakraborty - Professional Information</h1>
        
        <section>
          <h2>Professional Summary</h2>
          <p>
            Dhrubajyoti Chakraborty (also known as Dhruv) is a Product Manager at Harness.io, specializing in AI-native software delivery platforms. 
            He focuses on building reasoning systems and engineering analytics that help engineering teams measure what matters and make better decisions.
          </p>
        </section>

        <section>
          <h2>Current Position</h2>
          <h3>Product Manager at Harness.io</h3>
          <p><strong>Duration:</strong> March 2025 - Present</p>
          <p><strong>Location:</strong> India</p>
          
          <h4>Key Responsibilities and Achievements:</h4>
          <ul>
            <li><strong>SEI 2.0 Initiative:</strong> Driving engineering analytics grounded in AI-native abstractions</li>
            <li><strong>Agentic Framework:</strong> Built and shipped efficiency agents that help engineering teams reason about productivity and unblock faster</li>
            <li><strong>Onboarding Optimization:</strong> Reduced onboarding time from months to minutes by launching self-assembling org agents</li>
            <li><strong>Customer Focus:</strong> Working closely with customers weekly to close feedback loops and build what matters</li>
          </ul>
        </section>

        <section>
          <h2>Professional Experience</h2>
          
          <h3>Developer Relations Engineer at Harness.io</h3>
          <p><strong>Duration:</strong> August 2023 - February 2025</p>
          <ul>
            <li><strong>InsightX Launch:</strong> Built introspection layer for AI code tools like Copilot</li>
            <li><strong>Product Analytics:</strong> Added telemetry into the product: wired Segment → Amplitude → product decisions</li>
            <li><strong>Automation Engine:</strong> Shipped Propels (internal automation engine) for engineering automation workflows</li>
            <li><strong>DevRel Strategy:</strong> Took DevRel beyond talks & treated it as product feedback flywheel</li>
          </ul>

          <h3>Software Engineer at Harness.io</h3>
          <p><strong>Duration:</strong> July 2022 - July 2023</p>
          <ul>
            <li><strong>CI Product Features:</strong> Shipped core features including test intelligence, cache intelligence, and pipeline insights</li>
            <li><strong>Integrations:</strong> Built key integrations (Nexus, GAR) and OSS demos</li>
            <li><strong>AI Interface:</strong> Prototyped AI-native interface to orchestrate pipelines — early ideas on LLMs as reasoning agents</li>
            <li><strong>AI Assistant:</strong> Built Harness AIDA - assistant that observed support patterns and responded with learned behavior</li>
          </ul>

          <h3>Developer Relations Engineer at Commudle</h3>
          <p><strong>Duration:</strong> July 2021 - July 2022</p>
          <ul>
            <li><strong>Team Building:</strong> Founding DevEx team member</li>
            <li><strong>Platform Scaling:</strong> Scaled platform to 200k+ developers, 250+ communities</li>
            <li><strong>Content Strategy:</strong> Ran PLG streams - created content, docs, and hosted events</li>
          </ul>

          <h3>Machine Learning Engineer at SARS</h3>
          <p><strong>Duration:</strong> 2020 - 2021 (Part-time)</p>
          <ul>
            <li><strong>Semantic Recommender:</strong> Built semantic recommender using RoBERTa and Data2Vec</li>
            <li><strong>Attribute Extraction:</strong> Trained attribute extractors for content pipelines</li>
            <li><strong>Automation:</strong> Replaced Wordpress plugin logic with ML automation</li>
          </ul>

          <h3>Machine Learning Engineer at Azure Skynet</h3>
          <p><strong>Duration:</strong> 2020 (Internship)</p>
          <ul>
            <li><strong>First Technical Role:</strong> ML + infrastructure work</li>
            <li><strong>Microservices:</strong> Shipped microservices on Azure using Docker, Kubernetes, BentoML</li>
            <li><strong>ML Frameworks:</strong> Worked with TensorFlow.js and SciML</li>
          </ul>
        </section>

        <section>
          <h2>Technical Expertise</h2>
          <ul>
            <li><strong>Machine Learning & AI:</strong> Neural networks, production ML, reasoning systems</li>
            <li><strong>Product Management:</strong> AI-native product development, engineering analytics</li>
            <li><strong>Developer Relations:</strong> Community building, developer experience, content creation</li>
            <li><strong>Software Engineering:</strong> CI/CD, cloud native development, system architecture</li>
            <li><strong>Engineering Analytics:</strong> Metrics, productivity measurement, AI-powered insights</li>
            <li><strong>Cloud Technologies:</strong> Azure, Docker, Kubernetes, microservices</li>
          </ul>
        </section>

        <section>
          <h2>Research Contributions</h2>
          
          <h3>Social Engineering Using Neuro-sentiments (2023)</h3>
          <p>Explored how neural signals encode emotional states. Built high-resolution neurosentiment maps and predictive systems for behavioral interventions.</p>

          <h3>Quantum Theory to Model Cognitive Phenomena (2021)</h3>
          <p>Applied principles from quantum mechanics to cognitive science. Focused on superposition and uncertainty in human belief and decision-making.</p>

          <h3>Robot Learning Through Micro-expressions (2021)</h3>
          <p>Used microexpressions as implicit feedback for robotic learning. Designed systems for adaptive and more intuitive human-robot interaction.</p>
        </section>

        <section>
          <h2>Content Creation</h2>
          
          <h3>YouTube Channel: @codewdhruv</h3>
          <p><strong>Subscribers:</strong> 351+</p>
          <p><strong>Content Focus:</strong> Neural networks, cloud native development, developer experience</p>
          <p><strong>Frequency:</strong> New videos weekly</p>

          <h3>Blog & Newsletter</h3>
          <p>Writes about technology, engineering systems, and the intersection of AI with developer experience on his blog and Substack newsletter.</p>
        </section>

        <section>
          <h2>Background & Education</h2>
          <ul>
            <li><strong>Origin:</strong> Grew up in Assam, India</li>
            <li><strong>Career Start:</strong> Began with machine learning, focusing on how models behave in production</li>
            <li><strong>Career Progression:</strong> Machine Learning Engineer → Software Engineer → Developer Relations Engineer → Product Manager</li>
            <li><strong>Languages:</strong> English, Hindi, Assamese</li>
          </ul>
        </section>

        <section>
          <h2>Professional Philosophy</h2>
          <p>
            Dhrubajyoti focuses on building systems that scale and solve real problems. His main focus is on reasoning systems that help humans reason better. 
            He believes in the power of AI to augment human capabilities in engineering and product development.
          </p>
        </section>

        <section>
          <h2>Contact Information</h2>
          <ul>
            <li><strong>Website:</strong> <a href="https://codewdhruv.com">codewdhruv.com</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/dhruvvjyoti">linkedin.com/in/dhruvvjyoti</a></li>
            <li><strong>YouTube:</strong> <a href="https://www.youtube.com/@codewdhruv">@codewdhruv</a></li>
            <li><strong>Newsletter:</strong> <a href="https://codewdhruv.substack.com">codewdhruv.substack.com</a></li>
          </ul>
        </section>
      </section>
    </>
  );
} 