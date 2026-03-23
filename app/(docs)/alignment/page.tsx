import type { Metadata } from "next"
import { PageHeader, InfoCard } from "@/components/docs-components"
import {
  Shield,
  Code,
  Lock,
  ShieldCheck,
  Footprints,
  Users,
  Globe,
  Scale,
  ExternalLink,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Ethereum Alignment — OpenScan",
  description:
    "How OpenScan's architecture and principles align with the Ethereum Foundation Mandate and CROPS.",
}

export default function AlignmentPage() {
  return (
    <div className="prose">
      <PageHeader
        title="Ethereum Alignment"
        description="How OpenScan embodies the principles of the Ethereum Foundation Mandate — and where we hold ourselves accountable."
      />

      <h2 id="closing-the-trust-gap">Closing the Trust Gap</h2>
      <p>
        The blockchain ecosystem has decentralized consensus, computation, and
        money — yet the tools people use to <em>see</em> what happened on-chain
        remain centralized. Hosted APIs, proprietary backends, and opaque
        indexers sit between users and the truth.
      </p>
      <p>
        OpenScan was built to close that gap: a fully client-side, open-source
        explorer that connects directly to blockchain nodes with no
        intermediary. This is not a product decision — it is a principled one.
      </p>
      <p>
        The Ethereum Foundation&apos;s{" "}
        <a
          href="https://openscan.eth.link/#/1/tx/0x5dd574df963a1df1f064791e0f6ff41ec972cdbba12293b7e1ece582052ba855"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mandate
        </a>{" "}
        articulates these same principles at the protocol level, centered on{" "}
        <strong>CROPS</strong> — Censorship Resistance, Open Source, Privacy,
        Security — as the non-negotiable foundation of Ethereum&apos;s purpose.
        OpenScan&apos;s architecture is a concrete implementation of CROPS for
        the domain of blockchain data access.
      </p>

      <h2 id="crops-mapping">CROPS in Practice</h2>
      <p>
        Each CROPS property maps to a specific architectural decision in
        OpenScan — not as aspiration, but as shipped code.
      </p>

      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Censorship Resistance"
          description="No server to block, no API keys to revoke, no intermediary to pressure. The client-side architecture ensures no actor can selectively exclude valid use. Users can configure their own RPC endpoints for full independence."
          icon={<Shield className="h-5 w-5" />}
        />
        <InfoCard
          title="Open Source"
          description="The entire codebase — explorer, network connectors, metadata, docs — lives in public repositories. Anyone can audit, fork, or contribute. No proprietary black boxes."
          icon={<Code className="h-5 w-5" />}
        />
        <InfoCard
          title="Privacy"
          description="No backend server observes your queries. Your exploration activity stays on your device. No ads, no trackers, no data harvesting — privacy by architecture, not by policy."
          icon={<Lock className="h-5 w-5" />}
        />
        <InfoCard
          title="Security"
          description="Every effect on state is reproducible from public data. Parallel RPC strategies detect provider divergence. Minimal dependencies reduce attack surface. A system that fails must fail publicly and recoverably."
          icon={<ShieldCheck className="h-5 w-5" />}
        />
      </div>

      <h2 id="shared-concepts">Shared Principles</h2>
      <p>
        Beyond CROPS, several concepts from the Mandate resonate deeply with
        OpenScan&apos;s design and governance.
      </p>

      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Walkaway Test"
          description="The Mandate asks: would the system survive if its stewards disappeared? OpenScan's client-side architecture passes this test — it works with any RPC endpoint, independent of the team or any infrastructure we operate."
          icon={<Footprints className="h-5 w-5" />}
        />
        <InfoCard
          title="No Indispensable Intermediaries"
          description="The Mandate warns against entrenched chokepoints. OpenScan has no backend, no proprietary API, no gatekeeping layer. Anyone who forwards or attests must be replaceable by any other participant."
          icon={<Users className="h-5 w-5" />}
        />
        <InfoCard
          title="Infrastructure as a Public Good"
          description="The Mandate calls for 'civilizational foundational infrastructure.' OpenScan treats blockchain exploration as public infrastructure — permanently free for all end-users, sustained by ecosystem supporters, not advertisers."
          icon={<Globe className="h-5 w-5" />}
        />
        <InfoCard
          title="Non-Extractive Sustainability"
          description="The Mandate rejects 'slippery slopes to arbitrary extraction.' OpenScan's revenue model sources from projects and networks that benefit from open infrastructure — never from users, never from ads, never from data."
          icon={<Scale className="h-5 w-5" />}
        />
      </div>

      <h2 id="honest-tensions">Honest Tensions</h2>
      <p>
        Alignment is not perfection. We believe in naming tensions openly rather
        than pretending they don&apos;t exist.
      </p>
      <p>
        <strong>Subscription voting power.</strong> OpenScan&apos;s Ally
        subscription tier includes roadmap voting power. The Mandate warns
        against systems where paying more grants more influence — a path toward
        private capture. We bound this tension deliberately: voting applies to
        feature prioritization only, never to principles or architectural
        decisions. The process is transparent, and the community retains override
        authority through the DAO. We will continue to scrutinize this mechanism
        as the project matures.
      </p>

      <h2 id="foundational-references">Foundational References</h2>
      <p>
        OpenScan&apos;s principles draw from two foundational documents. Both
        are publicly accessible and independently verifiable.
      </p>

      <div className="not-prose grid gap-4 sm:grid-cols-1 lg:grid-cols-2 mb-8">
        <a
          href="https://openscan.eth.link/#/1/tx/0x5dd574df963a1df1f064791e0f6ff41ec972cdbba12293b7e1ece582052ba855"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <InfoCard
            title="Ethereum Foundation Mandate"
            description="The EF's 1000-year charter for Ethereum — centered on CROPS, self-sovereignty, and the walkaway test. Stored on-chain and viewable via OpenScan."
            icon={<ExternalLink className="h-5 w-5" />}
          />
        </a>
        <a
          href="https://trustlessness.eth.limo/general/2025/11/11/the-trustless-manifesto.html"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <InfoCard
            title="The Trustless Manifesto"
            description="The philosophical foundation for OpenScan's Three Laws of Trustless Design — why trustlessness matters, what it demands, and the pledge we build by."
            icon={<ExternalLink className="h-5 w-5" />}
          />
        </a>
      </div>
    </div>
  )
}
