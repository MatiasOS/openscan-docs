import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/docs-components"

export const metadata: Metadata = {
  title: "Explorer Alpha Status",
  description:
    "What alpha release means for openscan.eth.link during early development",
}

export default function ExplorerAlphaStatusPage() {
  return (
    <div className="prose">
      <PageHeader
        title="Alpha Status"
        description="OpenScan is currently in alpha. It is not production-ready yet and is focused on early validation."
      />

      <h2 id="what-alpha-means">What Alpha Means</h2>
      <p>
        This alpha stage exists to validate the first version of OpenScan in
        real usage and improve it quickly with community input.
      </p>

      <h2 id="current-goals">Current Goals</h2>
      <ul>
        <li>Test the explorer's core and initial functionalities.</li>
        <li>Collect community feedback on functionality and user experience.</li>
        <li>Iterate rapidly based on user feedback.</li>
      </ul>
      
      <h2 id="what-to-expect">What to Expect</h2>
      <ul>
        <li>New features are added regularly.</li>
        <li>Temporary bugs and rough edges are expected in this stage.</li>
        <li>Frequent improvements will be shipped as feedback comes in.</li>
      </ul>
      <h2 id="tutorial-links">Tutorial Links</h2>
      <p>
        If you want to learn more and explore the explorer in depth or reuse our stack, start with
        understanding how it works and then check out the tutorials, including the Hardhat plugin tutorial.
      </p>

      <Link href="/explorer/how-it-works" className="text-accent">
        How it Works
      </Link>{" "}
      — Follow a detailed non technical guide. <br />
      <Link href="/tutorials" className="text-accent">
        Tutorials
      </Link>{" "}
      — Follow step-by-step guides, including the Hardhat plugin tutorial.

    </div>
  )
}
