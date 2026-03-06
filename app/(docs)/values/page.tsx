import type { Metadata } from "next"
import { PageHeader, InfoCard } from "@/components/docs-components"
import {
  Eye,
  Globe,
  Heart,
  Lock,
  Code,
  Scale,
  Users,
  Sprout,
  HandCoins,
  Blocks,
  Unplug,
  ShieldCheck,
  Sailboat,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Values — OpenScan",
  description:
    "The core values and principles behind OpenScan — trustless blockchain exploration as public infrastructure.",
}

export default function ValuesPage() {
  return (
    <div className="prose">
      <PageHeader
        title="Values"
        description="The core values and principles behind OpenScan — trustless blockchain exploration as public infrastructure."
      />

      <h2 id="core-principles">Core Principles</h2>
      <p>
        OpenScan is not merely a product — it is a declaration of principles for
        public blockchain infrastructure. Every decision we make is guided by a
        commitment to transparency, neutrality, and the belief that core
        infrastructure must remain a public good.
      </p>
      <p>
        These principles are non-negotiable. They define what OpenScan is and what it will never compromise on.
      </p>

      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="User-First Mandate"
          description="The platform must be permanently free, fully open, and completely transparent for all end-users."
          icon={<Heart className="h-5 w-5" />}
        />
        <InfoCard
          title="Privacy & Experience"
          description="No invasive advertising, trackers, or hidden user-data harvesting. We serve users, not advertisers."
          icon={<Lock className="h-5 w-5" />}
        />
        <InfoCard
          title="Open Source & Auditable"
          description="The entire codebase is publicly available, auditable, and encourages community contribution."
          icon={<Code className="h-5 w-5" />}
        />
        <InfoCard
          title="Infrastructure as a Public Good"
          description="The decentralized ecosystem thrives only when its core infrastructure is free, accessible, and neutral."
          icon={<Globe className="h-5 w-5" />}
        />
        <InfoCard
          title="Organic Growth"
          description="Success is driven by technical excellence, broad accessibility, and inherent trustworthiness — never by advertising."
          icon={<Sprout className="h-5 w-5" />}
        />
        <InfoCard
          title="Connection, Not Custody"
          description="OpenScan will not function as an intermediary that holds or stores information. We only deploy features that are publicly accessible."
          icon={<Unplug className="h-5 w-5" />}
        />
      </div>

      <h2 id="why-trustlessness-matters">Why Trustlessness Matters</h2>
      <p>
        Every system begins with good intentions.
        A hosted node here, a whitelisted relayer there. <br />
        Each is harmless on its own — and together they become habit. <br />
        Gateways become platforms. <br />
        Platforms become landlords. <br />
        Landlords decide who may enter and what they may do.
      </p>
      <p>
        The only defense is trustless design: systems whose correctness and fairness depend only on  <br />
        math and consensus, never on the goodwill of intermediaries. <br />
      </p>
      <p>
        Trustlessness is not a feature to add after the fact. <br />
        It is the thing itself. <br />
        Without it, everything else — efficiency, UX, scalability — is decoration on a fragile core.
      </p>
      <p>
        The blockchain ecosystem has made remarkable progress in decentralizing
        consensus and computation, yet one crucial piece remains centralized: the
        interface between users and on-chain data. This is more than a technical
        gap — it&apos;s a trust gap. OpenScan exists to close it.
      </p>

      <h2 id="three-laws">The Three Laws of Trustless Design</h2>
      <p>
        A trustless design must obey three laws. They are harsh — they limit what
        we can build easily. But they are the only guarantee that what we build
        belongs to everyone.
      </p>

      <div className="not-prose grid gap-4 sm:grid-cols-1 lg:grid-cols-2 mb-4">
        <InfoCard
          title="No Critical Secrets"
          description="No step of a protocol should depend on private information held by a single actor — except the user themselves."
          icon={<Eye className="h-5 w-5" />}
        />
        <InfoCard
          title="No Unverifiable Outcomes"
          description="Every effect on state must be reproducible and checkable from public data. A system that fails must fail publicly, transparently, and recoverably."
          icon={<ShieldCheck className="h-5 w-5" />}
        />
      </div>
      <div className="not-prose grid gap-4 sm:grid-cols-1 lg:grid-cols-1 mb-8">
        <InfoCard
          title="No Indispensable Intermediaries"
          description="Anyone who forwards, executes, or attests must be replaceable by any other participant following the same rules. Participation must be practically open, not reserved for those with servers, funding, and DevOps skills."
          icon={<Users className="h-5 w-5" />}
        />

      </div>

      <h2 id="sustainability">Sustainability Over Extraction</h2>
      <p>
        OpenScan&apos;s business model is designed to be ethical, non-extractive,
        and sustainable. The explorer remains entirely free for all end-users.
        Revenue is sourced from projects, networks, and builders that recognize
        the value of open infrastructure.
      </p>

      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Growth Over Extraction"
          description="All generated revenue is reinvested for development, growth, and infrastructure — never for disproportionate private gain."
          icon={<HandCoins className="h-5 w-5" />}
        />
        <InfoCard
          title="Transparent Governance"
          description="The OpenScan DAO ensures long-term neutrality, financial transparency, and community alignment through on-chain accountability."
          icon={<Scale className="h-5 w-5" />}
        />
        <InfoCard
          title="Lean Structure"
          description="A compact, high-performance team capped at 8 full-time individuals — maximizing efficiency and minimizing overhead."
          icon={<Sailboat className="h-5 w-5" />}
        />
        <InfoCard
          title="Open Development"
          description="All development takes place in public, auditable repositories. We use open-source tools wherever possible to maintain independence."
          icon={<Blocks className="h-5 w-5" />}
        />
      </div>

      <h2 id="the-pledge">The Pledge</h2>
      <blockquote>
        <p>
          We choose to build trustless systems even when it is harder. <br />
          We pay the cost of openness over the convenience of control. <br />
          We do not outsource neutrality to anyone who can be bribed, coerced, or shut down.<br />
          We measure success not by transactions per second, but by trust reduced per transaction.<br />
        </p>
        <p>
          We refuse to build on infrastructure we cannot replace.<br />
          We refuse to call a system &ldquo;permissionless&rdquo; when only the privileged can participate.<br />
          We refuse to trade autonomy for polish, or freedom for frictionless UX.
        </p>
        <p>
          If your protocol requires faith in an intermediary, change it.<br />
          If it relies on a private gateway, replace it.<br />
          If it hides critical state or logic offchain, expose it.<br />
        </p>
        <p>
          In the end, the world does not need more efficient middlemen.<br />
          It needs fewer reasons to trust them.
        </p>
      </blockquote>
      <p>
        The designs will change. The principles will not.
      </p>
    </div>
  )
}
