import type { Metadata } from "next"
import { PageHeader, Step, InfoCard } from "@/components/docs-components"
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table"
import {
  Code,
  Eye,
  Globe,
  Heart,
  Layers,
  Lock,
  Search,
  Shield,
  Wrench,
} from "lucide-react"

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Understand how OpenScan connects directly to blockchain nodes via RPC to provide trustless, open-source block exploration.",
}

export default function HowItWorksPage() {
  return (
    <div className="prose">
      <PageHeader
        title="How It Works"
        description="OpenScan is a trustless, open-source blockchain explorer that connects directly to blockchain nodes via RPC — no intermediaries, no centralized APIs, no compromises."
      />

      <h2 id="philosophy">Philosophy</h2>
      <p>
        OpenScan is not merely a product — it is a declaration of principles for
        public blockchain infrastructure. The blockchain ecosystem has made
        remarkable progress in decentralizing consensus and computation, yet one
        crucial piece remains centralized: the interface between users and on-chain
        data. This is more than a technical gap — it&apos;s a trust gap.
      </p>
      <p>
        OpenScan addresses this by providing open-source infrastructure that
        respects user privacy and offers the tools to independently verify on-chain
        information. Only an open-source approach can credibly deliver this promise.
      </p>

      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="User-First Mandate"
          description="Permanently free, fully open, and completely transparent for all end-users. Success driven by technical excellence and organic adoption — no advertising."
          icon={<Heart className="h-5 w-5" />}
        />
        <InfoCard
          title="Privacy & Experience"
          description="No invasive advertising, trackers, or hidden user-data harvesting. The explorer serves its users, not advertisers."
          icon={<Lock className="h-5 w-5" />}
        />
        <InfoCard
          title="Open Source & Auditable"
          description="The entire codebase is publicly available, auditable, and encourages community contribution."
          icon={<Code className="h-5 w-5" />}
        />
        <InfoCard
          title="Infrastructure as Public Good"
          description="The decentralized ecosystem thrives only when its core infrastructure is free, accessible, and neutral."
          icon={<Globe className="h-5 w-5" />}
        />
      </div>

      <h2 id="how-a-query-works">How a Query Works</h2>
      <p>
        When you look up an address, transaction, or block on OpenScan, the data
        comes directly from blockchain nodes — not from a centralized database or
        third-party API. Here is what happens under the hood:
      </p>

      <div className="not-prose mb-8">
        <Step
          number={1}
          title="User Enters a Query"
          description="You search for an address, transaction hash, block number, or ENS name"
        />
        <Step
          number={2}
          title="Direct RPC Execution"
          description="The request is sent directly to blockchain. No backend server sits in between. The strategy pattern (fallback, race, or parallel) determines how multiple RPC endpoints are used for reliability and speed."
        />
        <Step
          number={3}
          title="Data Rendering"
          description="The raw RPC response is parsed, formatted, and enriched with off-chain metadata"
        />
      </div>

      <h2 id="architecture">Architecture</h2>
      <p>
        OpenScan is a fully client-side application. There is no backend server, everything runs in your browser, connecting directly to blockchain nodes.
      </p>
      <ul>
        <li>
          <strong>Fully client-side</strong>. No backend server, no database, no centralized data collection. Your queries go straight to the chain.
        </li>
      </ul>

      <h2 id="supported-chains">Supported Chains</h2>
      <div className="not-prose mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Network</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Special Features</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Ethereum</TableCell>
              <TableCell>L1</TableCell>
              <TableCell>Full block, tx, address, contract interaction</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bitcoin</TableCell>
              <TableCell>L1</TableCell>
              <TableCell>UTXO model, mempool stats, fee estimates</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Arbitrum One</TableCell>
              <TableCell>L2</TableCell>
              <TableCell>L1 block fields, Arbitrum-specific trace data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Optimism</TableCell>
              <TableCell>L2</TableCell>
              <TableCell>L1/L2 fee breakdown, rollup-specific methods</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Base</TableCell>
              <TableCell>L2</TableCell>
              <TableCell>Optimism-compatible with OP Stack support</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Polygon</TableCell>
              <TableCell>L2</TableCell>
              <TableCell>Bor validator methods</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>BNB Smart Chain</TableCell>
              <TableCell>L1</TableCell>
              <TableCell>BSC-specific extended methods</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sepolia</TableCell>
              <TableCell>Testnet</TableCell>
              <TableCell>Ethereum testnet for development</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bitcoin Testnet4</TableCell>
              <TableCell>Testnet</TableCell>
              <TableCell>BIP94 Bitcoin testnet</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Localhost</TableCell>
              <TableCell>Dev</TableCell>
              <TableCell>Hardhat / Anvil local development</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h2 id="key-features">Key Features</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Block Explorer"
          description="Detailed block, transaction, and gas information with full receipt decoding and event log parsing."
          icon={<Search className="h-5 w-5" />}
        />
        <InfoCard
          title="Address Lookup"
          description="Balance, transaction history, and contract detection. ENS resolution on Ethereum mainnet."
          icon={<Eye className="h-5 w-5" />}
        />
        <InfoCard
          title="Contract Interaction"
          description="Read from and write to verified smart contracts directly from the explorer interface."
          icon={<Layers className="h-5 w-5" />}
        />
        <InfoCard
          title="Developer Tools"
          description="Hex encoder/decoder, unit converter (Wei/Gwei/ETH), and custom RPC endpoint configuration with fallback support."
          icon={<Wrench className="h-5 w-5" />}
        />
      </div>

      <h2 id="security">Security &amp; Privacy</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="No Backend"
          description="All queries run client-side. Your searches, addresses, and transaction lookups never pass through a centralized server."
          icon={<Shield className="h-5 w-5" />}
        />
        <InfoCard
          title="Custom RPCs"
          description="Configure your own RPC endpoints. Use privacy-focused providers or connect to your own node for full sovereignty."
          icon={<Lock className="h-5 w-5" />}
        />
      </div>

      <h2 id="open-source">Open Source</h2>
      <p>
        OpenScan is fully open source. Contribute, audit, or fork the explorer:
      </p>
      <ul>
        <li>
          <strong>Live app</strong> —{" "}
          <a href="https://openscan.eth.link/">OpenScan.eth.link</a>
        </li>
        <li>
          <strong>Explorer source code</strong> —{" "}
          <a href="https://github.com/openscan-explorer/explorer">github.com/openscan-explorer/explorer</a>
        </li>
      </ul>
    </div>
  )
}
