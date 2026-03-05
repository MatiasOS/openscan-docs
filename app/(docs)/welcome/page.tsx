import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader, InfoCard } from "@/components/docs-components"
import {
  ArrowRight,
  Compass,
  Code,
  ExternalLink,
  HandCoins,
  Lock,
  Sparkles,
  Unplug,
  Users,
  Telescope,
  SquareChevronRight,
  ToyBrick,
} from "lucide-react"
import { NetworkIcon } from "@/components/network-icon"

export const metadata: Metadata = {
  title: "Welcome to OpenScan",
  description:
    "OpenScan is the open-source, trustless, and privacy-respecting blockchain explorer — free for everyone.",
}

export default function WelcomePage() {
  return (
    <div className="prose">
      {/* 1. Hero */}
      <PageHeader
        title="Welcome to OpenScan"
        description="The open-source, trustless, and privacy-respecting blockchain explorer — free for everyone."
      />

      <p>
        OpenScan is an open-source fully independent blockchain explorer engineered to provide transparency, 
        simplicity, and true openness. A fundamental piece of public infrastructure for the crypto ecosystem.
      </p>

      {/* 2. Highlight Banner */}
      <div className="not-prose rounded-xl border border-accent/30 bg-accent/5 p-6 mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1.5">
              Try the Explorer
            </h3>
            <p className="text-sm text-muted-foreground">
              No sign-up, no tracking, no backend. <br />
              Browse txs, contracts, and tokens directly from the browser.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="https://openscan.eth.link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent px-4 py-2 text-sm font-semibold !text-slate-950 !no-underline hover:!text-slate-950 hover:!no-underline hover:bg-accent/90 !opacity-100 hover:!opacity-100 transition-colors"
            >
              Launch Explorer
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://github.com/openscan-explorer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-accent/50 bg-background px-4 py-2 text-sm font-semibold !text-foreground !no-underline hover:!text-foreground hover:!no-underline hover:bg-secondary !opacity-100 hover:!opacity-100 transition-colors"
            >
              GitHub
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 3. Quickstart / Learning Paths */}
      <h2 id="quickstart">Quickstart</h2>
      <p>
        Pick your path and get started with the OpenScan stack.
      </p>

      <div className="not-prose grid gap-4 sm:grid-cols-3 mb-8">
        <Link href="/explorer" className="group !no-underline hover:!no-underline">
          <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40 h-full">
            <h3 className="!mt-0 font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Compass className="h-5 w-5 shrink-0 text-accent" />
              Use
              <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Browse transactions, blocks, contracts, and tokens across multiple
              networks — directly from your browser.
            </p>
          </div>
        </Link>
        <Link href="/hardhat-plugin" className="group !no-underline hover:!no-underline">
          <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40 h-full">
            <h3 className="!mt-0 font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <SquareChevronRight className="h-5 w-5 shrink-0 text-accent" />
              Buidl
              <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Use the Hardhat Plugin to integrate OpenScan into your development workflow.
            </p>
          </div>
        </Link>
        <Link href="/super-user" className="group !no-underline hover:!no-underline">
          <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40 h-full">
            <h3 className="!mt-0 font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Telescope className="h-5 w-5 shrink-0 text-accent" />
              Super user
              <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Deep exploration and deeper insights. Learn how to leverage OpenScan's advanced features and become a power user of the ecosystem.
            </p>
          </div>
        </Link>
      </div>

      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <Link href="/skills" className="group !no-underline hover:!no-underline">
          <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40 h-full">
            <h3 className="!mt-0 font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <ToyBrick className="h-5 w-5 shrink-0 text-accent" />
              Integrate
              <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Use Skills, Tools, Network Connectors, and the Hardhat Plugin to
              build on the OpenScan stack.
            </p>
          </div>
        </Link>
        <Link href="/metadata" className="group !no-underline hover:!no-underline">
          <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40 h-full">
            <h3 className="!mt-0 font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <HandCoins className="h-5 w-5 shrink-0 text-accent" />
              Support
              <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Subscribe as a Backer, Partner, or Ally. Get verified listings,
              branding, and help sustain open infrastructure.
            </p>
          </div>
        </Link>
      </div>
      {/* 4. How It Works / Core Concepts */}
      <h2 id="how-it-works">How It Works</h2>
      <p>
        OpenScan is a fully client-side application. There is no required backend server.
        everything runs in your browser, connecting directly to blockchain nodes
        via RPC. <br />
        No intermediaries, no centralized APIs, no compromises.
      </p>

      <div className="not-prose grid gap-4 sm:grid-cols-3 mb-8">
        <InfoCard
          title="Trustless"
          description="No intermediary. Queries go from your browser to your trusted RPCs."
          icon={<Unplug className="h-5 w-5" />}
        />
        <InfoCard
          title="Open Source"
          description="Codebase is publicly available and auditable. Fork it, audit it, contribute to it."
          icon={<Code className="h-5 w-5" />}
        />
        <InfoCard
          title="Privacy First"
          description="No ads, no trackers, no data harvesting."
          icon={<Lock className="h-5 w-5" />}
        />
      </div>

      <p>
        Learn more about the architecture, query flow, and design philosophy in{" "}
        <Link href="/explorer/how-it-works">How It Works</Link>.
      </p>

      {/* 5. Supported Networks */}
      <h2 id="supported-networks">Supported Networks</h2>
      <p>
        OpenScan supports a growing number of EVM and non-EVM chains.
      </p>

      <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          "Ethereum",
          "Bitcoin",
          "Arbitrum One",
          "Optimism",
          "Base",
          "Polygon",
          "BNB Smart Chain",
        ].map((network) => (
          <div
            key={network}
            className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5 text-sm font-medium text-foreground"
          >
            <NetworkIcon network={network} className="h-3.5 w-3.5 shrink-0" />
            {network}
          </div>
        ))}
      </div>
      <p>
        See the full list of supported chains, testnets, and local dev networks in{" "}
        <Link href="/network-connectors">Network Connectors</Link>.
      </p>

      {/* 6. Subscription / Ecosystem Support */}
      <h2 id="ecosystem-support">Ecosystem Support</h2>
      <p>
        OpenScan is free for all end-users. <br />
        Revenue comes from projects, networks, and builders that recognize the value of open infrastructure
        and want to appear as verified supporters of the ecosystem.
      </p>

      <div className="not-prose grid gap-4 sm:grid-cols-3 mb-8">
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="!mt-0 font-semibold text-foreground mb-1.5 flex items-center gap-2">
            <span className="inline-block rounded-md bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
              Tier 1
            </span>
            Backer
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Verification, formal recognition, and listing. The essential
            foundational level for tokens, networks, apps, and companies.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="!mt-0 font-semibold text-foreground mb-1.5 flex items-center gap-2">
            <span className="inline-block rounded-md bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
              Tier 2
            </span>
            Partner
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Enhanced visibility, direct technical communication, and influence on
            the project roadmap through voting power.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="!mt-0 font-semibold text-foreground mb-1.5 flex items-center gap-2">
            <span className="inline-block rounded-md bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
              Tier 3
            </span>
            Ally
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Deep commitment with the highest level of customisation, integration,
            and participation in the OpenScan DAO.
          </p>
        </div>
      </div>

      <p>
        See full pricing and benefits for tokens, networks, apps, and
        organizations in{" "}
        <Link href="/metadata">Metadata &amp; Subscriptions</Link>.
      </p>

      {/* 7. Community & Developer Support */}
      <h2 id="community">Community &amp; Developer Support</h2>
      <p>
        OpenScan is built in the open. Join the community, contribute code, or
        report issues.
      </p>

      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="GitHub"
          description="All source code is public. Browse repos, open issues, submit PRs, or fork the explorer."
          icon={<Code className="h-5 w-5" />}
        />
        <InfoCard
          title="OpenScan DAO"
          description="Long-term governance ensuring neutrality, financial transparency, and community alignment through on-chain accountability."
          icon={<Users className="h-5 w-5" />}
        />
      </div>

      <ul>
        <li>
          <strong>Contact</strong> —{" "}
          <a href="https://xmtp.chat/production/conversations/26693a591417cf1c07e7318df5c88240" target="_blank" rel="noopener noreferrer">
            XMTP Chat
          </a>
        </li>
        <li>
          <strong>OpenScan DAO</strong> —{" "}
          <a href="https://www.tally.xyz/gov/openscan-dao" target="_blank" rel="noopener noreferrer">
            Tally
          </a>
        </li>
        <li>
          <strong>Values</strong> —{" "}
          <Link href="/values">Read the foundations of OpenScan</Link>
        </li>
      </ul>
    </div>
  )
}
