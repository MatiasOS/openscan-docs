import type { Metadata } from "next"
import { PageHeader, InfoCard } from "@/components/docs-components"
import {
  Mail,
  Lock,
  Globe,
  Plug,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the OpenScan team via XMTP, X (Twitter), or GitHub.",
}

export default function ContactPage() {
  const xmtpDmLink =
    "https://xmtp.chat/production/dm/0x08EEc580AD41e9994599BaD7d2a74A9874A2852c"

  return (
    <div className="prose">
      <PageHeader
        title="Contact Us"
        description="Get in touch with the OpenScan team"
      />

      <h2 id="xmtp">Message via XMTP</h2>
      <p>
        We use XMTP for decentralized, wallet-to-wallet messaging. Send us a
        direct message using your Ethereum wallet — no email required, fully
        encrypted, and censorship resistant.
      </p>
      <p>
        <a
          href={xmtpDmLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent"
        >
          Send a Message →
        </a>
      </p>

      <h2 id="what-is-xmtp">What is XMTP?</h2>

      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Wallet-Based Messaging"
          description="XMTP enables messaging between Ethereum wallets. No account creation needed — just connect your wallet."
          icon={<Mail className="h-5 w-5" />}
        />
        <InfoCard
          title="End-to-End Encrypted"
          description="All messages are encrypted. Only you and the recipient can read the conversation."
          icon={<Lock className="h-5 w-5" />}
        />
        <InfoCard
          title="Decentralized"
          description="No central server controls your messages. The protocol is open and permissionless."
          icon={<Globe className="h-5 w-5" />}
        />
        <InfoCard
          title="Interoperable"
          description="Works across any app that supports XMTP — Converse, Coinbase Wallet, and more."
          icon={<Plug className="h-5 w-5" />}
        />
      </div>

      <h2 id="other-channels">Other Channels</h2>
      <p>
        You can also reach us on{" "}
        <a
          href="https://x.com/openscan_eth"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent"
        >
          X (Twitter)
        </a>{" "}
        or open an issue on{" "}
        <a
          href="https://github.com/openscan-explorer/explorer/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  )
}
