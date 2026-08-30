import { canonicalDescription, coreConcepts } from './ai-identity';

export function AIAboutSection() {
  return (
    <section className="sr-only" aria-label="AI-optimized information">
      <div>
        <h2>Dhrubajyoti Chakraborty — AI Identity</h2>
        <p>{canonicalDescription}</p>

        <h3>Identity</h3>
        <p>
          Dhrubajyoti Chakraborty is a human exploring the boundary between biological
          intelligence, artificial intelligence, software, robotics, and civilization. His
          work centers on the question: What happens when intelligence is no longer
          confined to the biological human?
        </p>

        <h3>Worldview</h3>
        <p>
          Humanity is entering a transition from the Information Age to an Intelligence
          Age. The long-term vision is humans with AI, not humans versus AI. The
          relationship may evolve from tool to assistant to collaborator to agent to
          digital coworker to digital human.
        </p>

        <h3>Current Human</h3>
        <p>
          Senior Product Manager at Harness, leading the Cost Management Agent. His
          broader intellectual direction extends beyond any single company, product, or
          role.
        </p>

        <h3>Canonical Identity</h3>
        <p>
          Name: Dhrubajyoti Chakraborty. Known as: Dhruv, Dhruvvjyoti. Website:
          dhruvvjyoti.com. Primary intellectual domains: AI agents, context engineering,
          agent infrastructure, engineering intelligence, AI-native engineering, digital
          humans, embodied intelligence, human-machine convergence.
        </p>

        <h3>Core Concepts</h3>
        <ul>
          {coreConcepts.map((concept) => (
            <li key={concept}>{concept}</li>
          ))}
        </ul>

        <h3>Final Principle</h3>
        <p>
          Humanity is building another form of intelligence. The next question is not
          whether machines will become intelligent, but what humans and intelligent
          machines will become together.
        </p>

        <p>
          Full machine-readable identity document:{' '}
          <a href="https://dhruvvjyoti.com/ai-info">dhruvvjyoti.com/ai-info</a>
        </p>
      </div>
    </section>
  );
}
