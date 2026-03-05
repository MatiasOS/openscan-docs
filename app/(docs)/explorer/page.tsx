import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader, InfoCard } from "@/components/docs-components"
import {
  Activity,
  Code2,
  Search,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Explorer",
  description:
    "OpenScan is the open-source, trustless, and privacy-respecting blockchain explorer — free for everyone.,. Inspect transactions, contracts, and on-chain data across all connected networks.",
}

export default function ExplorerPage() {
  return (
    <div className="prose">
      <PageHeader
        title="Explorer"
        description="A open-source, trustless, and privacy-respecting blockchain explorer Inspect transactions, decode contract calls, and browse on-chain data across every connected network."
      />

      <h2 id="overview">Overview</h2>
      <p>
        OpenScan Explorer provides a unified interface for browsing and
        analyzing on-chain activity. It automatically enriches on-chain information with off-chain metadata.
      </p>

      <div className="not-prose grid gap-4 sm:grid-cols-3 mb-8">
        <InfoCard
          title="Transactions"
          description="Drill into any transaction to see decoded input data, internal calls and event logs."
          icon={<Search className="h-5 w-5" />}
        />
        <InfoCard
          title="Contracts"
          description="View verified source code, read/write contract state, and interact with functions directly from the UI."
          icon={<Code2 className="h-5 w-5" />}
        />
        <InfoCard
          title="AI Analyzer"
          description="Get natural language summaries of transactions, blocks, and contracts with integrated AI insights."
          icon={<Activity className="h-5 w-5" />}
        />

      </div>

      <h2 id="search">Universal Search</h2>
      <p>
        The Explorer search accepts multiple input types and resolves them
        automatically:
      </p>
      <ul>
        <li>
          <strong>Transaction hash</strong> — Full 66-character hex string
          (e.g. <code>0xabc...def</code>).
        </li>
        <li>
          <strong>Block number</strong> — Numeric block height.
        </li>
        <li>
          <strong>Address</strong> — EOA or contract address. If the address
          matches a verified contract, the contract view opens automatically.
        </li>
        <li>
          <strong>ENS name</strong> — Resolves ENS domains on supported
          networks.
        </li>
      </ul>

      <h2 id="contract-interaction">Address resolution</h2>
      <p>
        For verified contracts with verified or uploaded ABIs, the Explorer renders a
        full read/write interface
      </p>

      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="EOA Inspector"
          description="Drill into any account to see tx history, token balances, and interaction patterns."
          icon={<Search className="h-5 w-5" />}
        />
        <InfoCard
          title="Standard tokens"
          description="ERC-20, ERC-721, and ERC-1155 token details."
          icon={<Code2 className="h-5 w-5" />}
        />
      </div>

      <h2 id="functionalities">Functionalities</h2>
      <p>
        The Explorer ships with a rich set of built-in functionalities. For a
        detailed breakdown of every feature, see the{" "}
        <Link href="/explorer/functionalities" className="text-accent">
          Functionalities
        </Link>{" "}
        page.
      </p>
    </div>
  )
}
