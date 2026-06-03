import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dhrubajyoti Chakraborty',
  description: 'I build things, think about intelligence, and occasionally write about both.',
  openGraph: {
    title: 'Dhrubajyoti Chakraborty',
    description: 'I build things, think about intelligence, and occasionally write about both.',
    type: 'website',
  },
};

export default function Page() {
  return (
    <div className="max-w-[650px] mx-auto px-3 py-12 mt-[70px]">
      <h2>Dhrubajyoti Chakraborty</h2>

      <p>I build things, think about intelligence, and occasionally write about both.</p>

      <br/>

      <p>Some things about me:</p>
      <br/>
      <ul>
        <li>Grew up in Assam, India</li>
        <li>Started in machine learning. Found my hook on what happens to systems when they meet the real world</li>
        <li>Kept moving until I found the job where understanding the problem is the job</li>
        <li>Currently at{' '}
          <a href="https://harness.io" target="_blank" rel="noopener noreferrer">Harness</a>
          , building AI agents for engineering teams
        </li>
        <li>Obsessed with memory, cognition, and what it means for a machine to actually understand something</li>
      </ul>
      <br/>

      <p>Some things I believe:</p>
      <br/>
      <ul>
        <li>Understanding a system deeply is more valuable than operating it quickly
          <ul>
            <li>Most people optimize for throughput. The interesting ones optimize for comprehension.</li>
            <li>Before you read the source, ask why. It compounds</li>
          </ul>
        </li>
        <li>The quality that makes humans exceptional is emotions
          <ul>
            <li>Curiosity, conviction, the willingness to bet on something uncertain. All of that runs on feeling</li>
            <li>Agents that can replicate this won't just be more human. They'll be more capable in ways we probably can't fully model yet</li>
          </ul>
        </li>
        <li>Curiosity across fields is an unfair advantage
          <ul>
            <li>Cognitive science taught me things about software that no engineering course ever did</li>
            <li>The people who read widely and connect loosely tend to see things first</li>
          </ul>
        </li>
        <li>Most complexity is hidden fear
          <ul>
            <li>Foundational questions, complicated explanations, complicated processes. Mostly what is correct is a simpler version</li>
            <li>It explains the truth to you exactly where the abstraction breaks</li>
            <li>Simplicity takes more courage than complexity</li>
          </ul>
        </li>
      </ul>

      <br/>

      <p>
        I write about AI, systems thinking, and the spaces where technology and
        cognition overlap on{' '}
        <a href="https://codewdhruv.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
        {' '}and shorter on{' '}
        <a href="https://twitter.com/codewdhruv" target="_blank" rel="noopener noreferrer">Twitter</a>
        . I make videos on{' '}
        <a href="https://youtube.com/@codewdhruv" target="_blank" rel="noopener noreferrer">YouTube</a>
        .
      </p>
<br/>
      <p>
        If something here resonates, or you want to think out loud about
        something — <a href="mailto:dhruvvjyoti@gmail.com">write to me</a>.
      </p>

      <p style={{ marginTop: '2em', fontSize: '14px', color: '#666' }}>
        <a href="https://twitter.com/codewdhruv" target="_blank" rel="noopener noreferrer">twitter</a>
        {' · '}
        <a href="https://linkedin.com/in/dhruvvjyoti" target="_blank" rel="noopener noreferrer">linkedin</a>
        {' · '}
        <a href="https://youtube.com/@codewdhruv" target="_blank" rel="noopener noreferrer">youtube</a>
        {' · '}
        <a href="https://codewdhruv.substack.com" target="_blank" rel="noopener noreferrer">substack</a>
        {' · '}
        <a href="mailto:dhruvvjyoti@gmail.com">dhruvvjyoti@gmail.com</a>
      </p>
    </div>
  );
}
