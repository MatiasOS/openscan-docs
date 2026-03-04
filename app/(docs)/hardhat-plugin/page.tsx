import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader, Step, InfoCard } from "@/components/docs-components"
import { Eye, Terminal, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Hardhat Plugin",
  description:
    "Hardhat 3 plugin that launches the OpenScan Explorer webapp and logs transaction links with OpenScan URLs.",
}

export default function HardhatPluginPage() {
  return (
    <div className="prose">
      <PageHeader
        title="Hardhat Plugin"
        description="Hardhat 3 plugin that automatically launches the OpenScan Explorer webapp, opens your browser, and logs transaction links with OpenScan URLs."
      />

      <h2 id="features">Features</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-3 mb-8">
        <InfoCard
          title="Explorer Webapp"
          description="Automatically launches the OpenScan Explorer on localhost:3030 when you start a Hardhat node."
          icon={<Eye className="h-5 w-5" />}
        />
        <InfoCard
          title="Transaction Links"
          description="Logs transaction links with OpenScan URLs directly in your Hardhat console output."
          icon={<Terminal className="h-5 w-5" />}
        />
        <InfoCard
          title="Hardhat 3 Native"
          description="Built as a Hardhat 3 plugin using network Hook Handlers for clean integration."
          icon={<Wrench className="h-5 w-5" />}
        />
      </div>

      <h2 id="resources">Resources</h2>
      <ul>
        <li>
          <strong>GitHub</strong> —{" "}
          <a href="https://github.com/AntoineMerand/openscan-hardhat-plugin" target="_blank" rel="noopener noreferrer">
            Repository
          </a>
        </li>
        <li>
          <strong>Tutorials</strong> —{" "}
          <Link href="/tutorials">Learn how to use the plugin</Link>
        </li>
      </ul>

    </div>
  )
}
