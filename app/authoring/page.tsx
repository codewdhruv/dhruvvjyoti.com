import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Authoring',
  description: 'List of my articles published on third-party channels',
};

async function Stars() {
  let res = await fetch('https://api.github.com/repos/vercel/next.js');
  let json = await res.json();
  let count = Math.round(json.stargazers_count / 1000);
  return `${count}k stars`;
}


export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">authoring</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        A list of some of my articles published on third-party channels / I am unable to maintain this page at this moment.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Harness.io</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Developer Relations Engineer
        </p>
        <ul>
  <li> 
    <a href="https://www.harness.io/blog/optimizing-facebooks-proxygen-project-build-time-with-harness-ci-a-case-study">
        Optimizing Facebook’s Proxygen Project Build Time with Harness CI: A Case Study
    </a>
  </li>
  <li> 
    <a href="https://www.harness.io/blog/announcing-business-alignment-2-0-connect-engineering-to-business-value-like-never-before">
    Announcing Business Alignment 2.0 - Connect Engineering to Business Value like Never Before
    </a>
  </li>
  <li> 
    <a href="https://www.harness.io/blog/top-3-sprint-metrics-to-measure-developer-productivity">
    Top 3 Sprint Metrics to Measure Developer Productivity
    </a>
  </li>
  <li> 
    <a href="https://www.harness.io/blog/why-do-you-need-a-developer-metrics-dashboard-for-your-engineering-team">
    Why do you need a Developer metrics dashboard for your engineering team?
    </a>
  </li>
  <li> 
    <a href="https://www.harness.io/blog/how-the-size-of-a-pull-request-can-impact-developer-experience">
    How the size of a Pull Request can impact developer experience?
    </a>
  </li>
  <li> 
    <a href="https://developer.harness.io/docs/category/migrate-to-harness-ci">
    Migrate to Harness CI
    </a>
  </li>
  <li> 
    <a href="https://developer.harness.io/docs/continuous-integration/use-ci/run-tests/ci-fastapi-test">
    Tutorial - Test a FastAPI project
    </a>
  </li>
  <li> 
    <a href="https://developer.harness.io/docs/continuous-integration/use-ci/set-up-build-infrastructure/public-docker-images">
    Pre-built public images
    </a>
  </li>
  <li> 
    <a href="https://developer.harness.io/docs/continuous-integration/use-ci/run-tests/test-intelligence/ti-test-splitting">
    Split tests (parallelism) with TI
    </a>
  </li>
       </ul>
       <p>Find all my marketing blogs written on the Harness platform <a href="https://www.harness.io/authors/dhrubajyoti-chakraborty">here</a>
        </p>        
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Commudle</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Developer Relations Engineer - Internship (2021-2022)
        </p>
       <ul>
        <li>
        Fetch failed!
        </li>
       </ul>
      </div>
    </section>
  );
}