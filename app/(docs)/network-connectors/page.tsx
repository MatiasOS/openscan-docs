import type { Metadata } from "next"
import { PageHeader, InfoCard } from "@/components/docs-components"
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table"
import {
  Wifi,
  Zap,
  ShieldCheck,
  RefreshCw,
  Layers,
  Package,
} from "lucide-react"
import { NetworkIcon } from "@/components/network-icon"

export const metadata: Metadata = {
  title: "Network Connectors",
  description:
    "TypeScript library providing unified, type-safe RPC client interfaces for multiple blockchain networks with configurable request execution strategies.",
}

export default function NetworkConnectorsPage() {
  return (
    <div className="prose">
      <PageHeader
        title="Network Connectors"
        description="TypeScript library providing unified, type-safe RPC client interfaces for multiple blockchain networks with configurable request execution strategies."
      />

      <h2 id="features">Features</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Multi-Network Support"
          description="Unified API for 10+ blockchain networks including EVM chains (Ethereum, Optimism, Arbitrum, Polygon, BNB, Base, Aztec) and Bitcoin."
          icon={<Wifi className="h-5 w-5" />}
        />
        <InfoCard
          title="Strategy Pattern"
          description="Pluggable request execution strategies — Fallback for reliability, Parallel for consistency detection, Race for minimum latency."
          icon={<RefreshCw className="h-5 w-5" />}
        />
        <InfoCard
          title="Type Safety"
          description="Strong TypeScript typing with network-specific type definitions and type-safe client instantiation based on chain IDs."
          icon={<ShieldCheck className="h-5 w-5" />}
        />
        <InfoCard
          title="Zero Dependencies"
          description="Pure Node.js implementation with no external runtime dependencies. Native ESM support for modern JavaScript environments."
          icon={<Zap className="h-5 w-5" />}
        />
        <InfoCard
          title="Factory Pattern"
          description="Type-safe client instantiation based on chain IDs — numeric for EVM, CAIP-2 for Bitcoin."
          icon={<Package className="h-5 w-5" />}
        />
        <InfoCard
          title="Bitcoin Support"
          description="Full Bitcoin Core v28+ RPC support with ~115 methods using CAIP-2/BIP122 chain identifiers."
          icon={<Layers className="h-5 w-5" />}
        />
      </div>

      <h2 id="supported-networks">Supported Networks</h2>

      <h3 id="evm-networks">EVM Networks</h3>
      <div className="not-prose mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Network</TableHead>
              <TableHead>Chain ID</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="Ethereum" className="h-4 w-4" />Ethereum</span></TableCell>
              <TableCell><code>1</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="Optimism" className="h-4 w-4" />Optimism</span></TableCell>
              <TableCell><code>10</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="BNB Smart Chain" className="h-4 w-4" />BNB Smart Chain</span></TableCell>
              <TableCell><code>56</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="BNB Testnet" className="h-4 w-4" />BNB Testnet</span></TableCell>
              <TableCell><code>97</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="Polygon" className="h-4 w-4" />Polygon</span></TableCell>
              <TableCell><code>137</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="Base" className="h-4 w-4" />Base</span></TableCell>
              <TableCell><code>8453</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="Arbitrum One" className="h-4 w-4" />Arbitrum One</span></TableCell>
              <TableCell><code>42161</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Aztec</TableCell>
              <TableCell><code>677868</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hardhat</TableCell>
              <TableCell><code>31337</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="Sepolia Testnet" className="h-4 w-4" />Sepolia Testnet</span></TableCell>
              <TableCell><code>11155111</code></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 id="bitcoin-networks">Bitcoin Networks</h3>
      <p>
        Bitcoin uses{" "}
        <a href="https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-2.md">CAIP-2</a>
        /
        <a href="https://github.com/bitcoin/bips/blob/master/bip-0122.mediawiki">BIP122</a>
        {" "}chain identifiers instead of numeric chain IDs.
      </p>
      <div className="not-prose mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Network</TableHead>
              <TableHead>Chain ID (CAIP-2)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="Bitcoin Mainnet" className="h-4 w-4" />Bitcoin Mainnet</span></TableCell>
              <TableCell><code className="text-xs">bip122:000000000019d6689c085ae165831e93</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="Bitcoin Testnet3" className="h-4 w-4" />Bitcoin Testnet3</span></TableCell>
              <TableCell><code className="text-xs">bip122:000000000933ea01ad0ee984209779ba</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="Bitcoin Testnet4" className="h-4 w-4" />Bitcoin Testnet4</span></TableCell>
              <TableCell><code className="text-xs">bip122:00000000da84f2bafbbc53dee25a72ae</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="Bitcoin Signet" className="h-4 w-4" />Bitcoin Signet</span></TableCell>
              <TableCell><code className="text-xs">bip122:00000008819873e925422c1ff0f99f7c</code></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h4 id="bitcoin-chain-id-constants">Bitcoin Chain ID Constants</h4>
      <p>
        For convenience, use the exported constants instead of raw chain ID strings:
      </p>
      <pre>
        <code>{`import {
  BITCOIN_MAINNET,
  BITCOIN_TESTNET3,
  BITCOIN_TESTNET4,
  BITCOIN_SIGNET
} from "@openscan/network-connectors";
`}</code>
      </pre>

      <h2 id="architecture">Architecture Overview</h2>

      <h3 id="strategy-pattern">Strategy Pattern</h3>
      <p>
        The library uses the Strategy Pattern to provide flexible RPC request execution:
      </p>
      <div className="not-prose grid gap-4 sm:grid-cols-3 mb-8">
        <InfoCard
          title="FallbackStrategy"
          description="Tries RPC providers sequentially until one succeeds. Minimal overhead — stops at first success. Best for reliability when providers are generally consistent."
          icon={<RefreshCw className="h-5 w-5" />}
        />
        <InfoCard
          title="ParallelStrategy"
          description="Executes all providers concurrently. Tracks response times and detects data inconsistencies via response hashing. Best for detecting provider divergence."
          icon={<Layers className="h-5 w-5" />}
        />
        <InfoCard
          title="RaceStrategy"
          description="Executes all providers concurrently, returns first success via Promise.any. Minimizes latency. Only fails if ALL providers fail."
          icon={<Zap className="h-5 w-5" />}
        />
      </div>

      <h3 id="type-safe-clients">Type-Safe Network Clients</h3>
      <p>
        Each network has a dedicated client class:
      </p>
      <ul>
        <li>Fully typed with network-specific type definitions</li>
        <li>Network-specific RPC methods (e.g., Arbitrum traces, Optimism rollup methods)</li>
        <li>Inherits base Ethereum methods for compatible networks</li>
        <li>Strong TypeScript inference for return types</li>
      </ul>

      <h2 id="resources">Resources</h2>
      <ul>
        <li>
          <strong>GitHub</strong> —{" "}
          <a href="https://github.com/openscan-explorer/network-connectors" target="_blank" rel="noopener noreferrer">
            Repository
          </a>
        </li>
        <li>
          <strong>npm</strong> —{" "}
          <a href="https://www.npmjs.com/package/@openscan/network-connectors" target="_blank" rel="noopener noreferrer">
            @openscan/network-connectors
          </a>
        </li>
      </ul>
    </div>
  )
}
