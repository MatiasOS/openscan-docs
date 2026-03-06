import type { Metadata } from "next"
import { PageHeader, InfoCard } from "@/components/docs-components"
import {
  ShieldCheck,
  HardDrive,
  Eye,
  Gauge,
  Braces,
  Bug,
  Layers,
  Cable,
  FlaskConical,
  Wrench,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Super User Functionalities",
  description:
    "Advanced Explorer features for super users: super-user mode, cache management, RPC strategies, debug traces, and more.",
}

export default function SuperUserFunctionalitiesPage() {
  return (
    <div className="prose">
      <PageHeader
        title="Super User Functionalities"
        description="Advanced features designed for developers, node operators, and blockchain super users who want full control over their Explorer experience."
      />

      {/* ── Super-User Mode ──────────────────────────────── */}
      <h2 id="super-user-mode">Super-User Mode</h2>
      <p>
        Super-user mode is a toggle available in the Explorer that unlocks
        advanced controls normally hidden from the default interface. Once
        enabled, additional panels and actions become visible across the
        application.
      </p>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Activation"
          description="Toggle super-user mode from the navigation bar. The state persists across sessions via local storage."
          icon={<ShieldCheck className="h-5 w-5" />}
        />
        <InfoCard
          title="Visual Indicator"
          description="When active, a badge or indicator is shown in the UI so you always know elevated controls are enabled."
          icon={<Eye className="h-5 w-5" />}
        />
      </div>

      {/* ── Advanced Cache Management ────────────────────── */}
      <h2 id="advanced-cache-management">Advanced Cache Management</h2>
      <p>
        Super-user mode unlocks granular cache controls that go beyond the
        standard &quot;clear all&quot; button:
      </p>
      <div className="not-prose grid gap-4 sm:grid-cols-2 lg:grid-cols-1 mb-8">
        <InfoCard
          title="Persistent Cache"
          description="View and manage the size of persistent cache store. Local cache."
          icon={<HardDrive className="h-5 w-5" />}
        />
      </div>

      {/* ── Endpoint Management ──────────────────────────── */}
      <h2 id="endpoint-management">Endpoint Management</h2>
      <p>
        Full control over per-network RPC endpoint configuration:
      </p>
      <ul>
        <li>Add custom RPC endpoints for any supported network.</li>
        <li>Reorder endpoints to set priority for fallback strategies.</li>
        <li>Tag endpoints as opensource, private, or tracking for classification.</li>
        <li>Sync, copy, and re-rank endpoints with one click.</li>
        <li>
          <strong>RPC testing</strong> — Verify health, latency, latest block,
          and tracking status per endpoint with test-all and retest-single
          actions.
        </li>
      </ul>

      {/* ── Debug & Trace ────────────────────────────────── */}
      <h2 id="debug-trace">Debug & Trace</h2>
      <p>
        When connected to a trace-capable backend (e.g., Erigon, Geth with
        debug APIs), the Explorer unlocks deep transaction introspection:
      </p>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Debug Trace"
          description="Step-by-step EVM execution trace showing opcode-level detail for any transaction."
          icon={<Bug className="h-5 w-5" />}
        />
        <InfoCard
          title="Call Trace"
          description="Hierarchical view of internal calls, showing call type, gas usage, and value transfers."
          icon={<Layers className="h-5 w-5" />}
        />
      </div>

      {/* ── Contract Verification & Artifacts ────────────── */}
      <h2 id="contract-verification">Contract Verification & Artifacts</h2>
      <p>
        Advanced contract verification workflows for developers:
      </p>
      <ul>
        <li>
          <strong>Sourcify verification</strong> — Standard and metadata-based
          verification against the Sourcify registry.
        </li>
        <li>
          <strong>Etherscan import</strong> — Import verified contract source
          and ABI directly from Etherscan.
        </li>
        <li>
          <strong>Similarity verification</strong> — Match unverified contracts
          against known bytecode patterns.
        </li>
        <li>
          <strong>Storage slot reader</strong> — Read arbitrary storage slots
          from any contract address.
        </li>
        <li>
          <strong>Hardhat Ignition artifacts</strong> — Upload and parse
          Ignition deployment ZIP files for local verification.
        </li>
      </ul>

      {/* ── Transaction Builder ──────────────────────────── */}
      <h2 id="transaction-builder">Transaction Builder</h2>
      <p>
        A full-featured transaction construction tool available in DevTools:
      </p>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Gas & Fee Estimation"
          description="Estimate gas limits and fee parameters before sending. Supports EIP-1559 fee fields."
          icon={<Gauge className="h-5 w-5" />}
        />
        <InfoCard
          title="Revert Simulation"
          description="Simulate transactions to detect reverts before broadcasting, saving gas on failed calls."
          icon={<FlaskConical className="h-5 w-5" />}
        />
        <InfoCard
          title="Raw RLP Broadcast"
          description="Broadcast pre-signed raw RLP-encoded transactions directly through configured endpoints."
          icon={<Cable className="h-5 w-5" />}
        />
        <InfoCard
          title="ABI Encoding"
          description="Encode function calls with parameters using contract ABIs for precise transaction construction."
          icon={<Braces className="h-5 w-5" />}
        />
      </div>

      {/* ── API Key Management ───────────────────────────── */}
      <h2 id="api-key-management">API Key Management</h2>
      <p>
        Manage third-party API keys from a single settings panel. Supported
        providers include Infura, Alchemy, and AI providers. Keys are stored
        locally and never transmitted to any third-party server beyond the
        provider itself.
      </p>

{/* ── DevTools ───────────────────────────────────── */}
      <h2 id="devtools">DevTools</h2>
      <p>
        A suite of built-in developer tools accessible from the Explorer
        interface:
      </p>

      <h3 id="devtools-transactions">Transactions</h3>
      <p>
        Transaction builder with gas and fee estimation, revert simulation,
        nonce fetch, send transaction, and raw RLP broadcast.
      </p>

      <h3 id="devtools-signatures">Signatures</h3>
      <p>
        Message signer, signature inspector (including compact signatures), and
        EIP-712 typed-data encoder/decoder.
      </p>

      <h3 id="devtools-utils">Utilities</h3>
      <div className="not-prose grid gap-4 sm:grid-cols-3 mb-8">
        <InfoCard
          title="ETH Unit Converter"
          description="Convert between wei, gwei, and ETH with instant bidirectional input."
          icon={<Wrench className="h-5 w-5" />}
        />
        <InfoCard
          title="Keccak Hasher"
          description="Hash arbitrary input with keccak256 and copy the result."
          icon={<Wrench className="h-5 w-5" />}
        />
        <InfoCard
          title="Hex Encoder / Decoder"
          description="Encode text to hex or decode hex back to human-readable strings."
          icon={<Wrench className="h-5 w-5" />}
        />
      </div>

      <h3 id="devtools-contracts">Contracts</h3>
      <p>
        Sourcify standard and metadata verification, Etherscan import,
        similarity verification, and storage slot reader.
      </p>

      <h3 id="devtools-development">Development</h3>
      <p>
        Hardhat Ignition artifact ZIP upload and parsing, plus local artifact
        flow for development-time contract verification.
      </p>
      <Link href="/hardhat-plugin" className="text-accent">
        Hardhat 3 Ignition Integration
      </Link>{" "}
      — Learn How to simplify your development time.
    </div>
  )
}
