import type { Metadata } from "next"
import { PageHeader, InfoCard } from "@/components/docs-components"
import {
  Globe,
  Blocks,
  ArrowRightLeft,
  FileCode2,
  Wallet,
  Image,
  Settings,
  ArrowRight,
} from "lucide-react"
import { NetworkIcon } from "@/components/network-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Explorer Functionalities",
  description:
    "Complete reference of every feature available in the Explorer: multi-chain support, EVM and Bitcoin browsing, DevTools, settings, and more.",
}

export default function ExplorerFunctionalitiesPage() {
  return (
    <div className="prose">
      <PageHeader
        title="Explorer Functionalities"
        description="A comprehensive reference covering every feature of the Explorer, from multi-network navigation and smart search to EVM and Bitcoin chain browsing, contract interaction, DevTools, and RPC management."
      />

      {/* ── Global App ─────────────────────────────────── */}
      <h2 id="global-app">Sections</h2>
      <p>
        
      </p>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <Link href="/explorer/super-user" className="group !no-underline hover:!no-underline">
          <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40 h-full">
            <h3 className="!mt-0 font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Globe className="h-5 w-5 shrink-0 text-accent" />
              Super User Mode
              <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Super user mode unlocks advanced controls. Raw information, dev Tools and technical analysis capabilities.
            </p>
          </div>
        </Link>
        <Link href="/explorer/settings" className="group !no-underline hover:!no-underline">
          <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40 h-full">
            <h3 className="!mt-0 font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Settings className="h-5 w-5 shrink-0 text-accent" />
              Settings
              <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Comprehensive configuration options for appearance, language, cache management, RPC strategy, API keys, and per-network RPC editing.
            </p>
          </div>
        </Link>
      </div>

      {/* ── Search ─────────────────────────────────────── */}
      <h2 id="search">Search</h2>
      <p>
        A context-aware search box that automatically detects the type of query you enter:
      </p>
      <ul>
        <li>
          <strong>Transaction hashes</strong> — Detected and routed
          directly to the transaction detail page.
        </li>
        <li>
          <strong>Addresses</strong> — Identified by format and routed
          to the correct address page.
        </li>
        <li>
          <strong>Block numbers</strong> — Numeric inputs resolve to the block
          detail page.
        </li>
        <li>
          <strong>ENS names</strong> — Resolved to their underlying address and
          routed to the address page.
        </li>
      </ul>

      {/* ── Supported Chains ───────────────────────────── */}
      <h2 id="supported-chains">Supported Chains</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="EVM Chains"
          description="Ethereum, Base, Arbitrum, Optimism, BNB Chain, Polygon."
          icon={<NetworkIcon network="Ethereum" />}
        />
        <InfoCard
          title="Bitcoin"
          description="Bitcoin Mainnet and Testnet with full block, transaction, address, and mempool browsing."
          icon={<NetworkIcon network="Bitcoin" />}
        />
      </div>

      {/* ── EVM Explorer ───────────────────────────────── */}
      <h2 id="evm-explorer">EVM Explorer</h2>
      <p>
        The EVM Explorer provides a full suite of tools for inspecting
        Ethereum-compatible chains:
      </p>

      <h3 id="evm-dashboard">Network Dashboard</h3>
      <p>
        An at-a-glance overview showing current price, gas tier breakdown
        (low / average / high), latest blocks, and the most recent
        transactions.
      </p>

      <h3 id="gas-tracker">Gas Tracker</h3>
      <p>
        A dedicated gas page displaying low, average, and high gas prices, the
        current base fee, and estimated transaction costs broken down by common
        action types.
      </p>

      <h3 id="blocks">Blocks and Transactions</h3>
      <div className="not-prose grid gap-4 sm:grid-cols-3 mb-8">
        <InfoCard
          title="Block and transactions list"
          description="Paginated lists with latest / newer / older navigation, validator links, etc."
          icon={<Blocks className="h-5 w-5" />}
        />
        <InfoCard
          title="Block Details"
          description="Core fields, gas usage %, base fee, burnt fee, extra data, withdrawals, transaction list, previous/next block navigation, and extended technical fields."
          icon={<Blocks className="h-5 w-5" />}
        />
        <InfoCard
          title="Transaction Details"
          description="Status, confirmations, fee math, gas metrics, nonce, type, and human-readable timestamps."
          icon={<ArrowRightLeft className="h-5 w-5" />}
        />
      </div>
      <p>Additional transaction capabilities include:</p>
      <ul>
        <li>
          <strong>Receipt and log decoding</strong> — Decoded function input,
          decoded event logs (ABI and generic), raw topics and data.
        </li>
        <li>
          <strong>L2 extras</strong> — Specific fields are displayed when applicable.
        </li>
      </ul>

      {/* ── Address & Contract Pages ───────────────────── */}
      <h2 id="address-contract">Address & Contract Pages</h2>
      <p>
        The Explorer detects the type of an address and routes to the
        appropriate display: account, contract, ERC-20, ERC-721, or ERC-1155.
      </p>

      <h3 id="ens">ENS Support</h3>
      <p>
        ENS reverse resolution and full ENS records display (mainnet-aware),
        including avatar, contenthash, and text records.
      </p>

      <h3 id="account-view">Account and Contracts View</h3>
      <ul>
        <li>Balance, transaction history, caching.</li>
        <li>Token holdings panel showing popular tokens.</li>
      </ul>

      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Verification & Source"
          description="Verification state (Sourcify), bytecode display, source code viewer, and ABI display."
          icon={<FileCode2 className="h-5 w-5" />}
        />
        <InfoCard
          title="Contract Interaction"
          description="Read and write function execution UI, wallet connect flow, and transaction status/result links."
          icon={<Wallet className="h-5 w-5" />}
        />
      </div>
      <p>
        ERC-20, ERC-721, and ERC-1155 contracts display additional
        contract-specific metadata panels (supply, decimals, collection info,
        etc.).
      </p>

      {/* ── NFT Token Details ──────────────────────────── */}
      <h3 id="nft-token-details">NFT Token Details</h3>
      <p>
        Individual token pages are available at{" "}
        <code>{'#/network/address/:contract/:tokenId'}</code>. The Explorer
        auto-detects ERC-721 vs ERC-1155 via interface checks.
      </p>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="ERC-721 Tokens"
          description="Metadata, image, attributes, current owner, approval status, collection info, token URI, and raw metadata."
          icon={<Image className="h-5 w-5" />}
        />
        <InfoCard
          title="ERC-1155 Tokens"
          description="Metadata, image, attributes, token URI, raw metadata, and balance lookup for any arbitrary holder address."
          icon={<Image className="h-5 w-5" />}
        />
      </div>

      {/* ── Bitcoin Explorer ───────────────────────────── */}
      <h2 id="bitcoin-explorer">Bitcoin Explorer</h2>
      <p>
        A full-featured Bitcoin explorer with the same level of detail as the
        EVM side:
      </p>
      <ul>
        <li>
          <strong>Dashboard</strong> — Network stats, latest blocks, latest
          transactions, and search.
        </li>
        <li>
          <strong>Blocks</strong> — Paginated list with drill-down. Block detail
          shows reward, fees, difficulty, size, coinbase message, and
          transaction list.
        </li>
        <li>
          <strong>Transactions</strong> — Block and page pagination. Detail view
          with input/output flow, fee rates, coinbase/RBF/witness flags,
          confirmations, and BTC + USD formatting.
        </li>
        <li>
          <strong>Addresses</strong> — Balance, UTXO set, recent transactions,
          and special handling for the genesis address.
        </li>
        <li>
          <strong>Mempool</strong> — Periodic refresh, paginated pending
          transaction table, fee and feerate metrics, and deep-link support for
          individual mempool transactions.
        </li>
      </ul>
    </div>
  )
}
