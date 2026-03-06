import type { Metadata } from "next"
import { PageHeader, InfoCard } from "@/components/docs-components"
import {
  Code2,
  Hammer,
  KeyRound,
  ScrollText,
  Terminal,
  TestTube,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Tools",
  description:
    "CLI utilities, code generators, and developer tools that accelerate your Acme development workflow.",
}

export default function ToolsPage() {
  return (
    <div className="prose">
      <PageHeader
        title="Tools"
        description="CLI utilities, code generators, and developer tools that accelerate your Acme workflow. From scaffolding projects to inspecting on-chain state, everything you need from the terminal."
      />

      <h2 id="cli">Acme CLI</h2>
      <p>
        The Acme CLI is the primary interface for managing projects, running
        generators, and interacting with on-chain data from your terminal:
      </p>
      <pre>
        <code>{`npm install -g @acme/cli`}</code>
      </pre>

      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Project Scaffolding"
          description="Initialize new projects with interactive templates. Choose your chain, framework, and tooling in seconds."
          icon={<Hammer className="h-5 w-5" />}
        />
        <InfoCard
          title="Contract Generator"
          description="Generate type-safe contract bindings, deployment scripts, and test stubs from ABI or Solidity source files."
          icon={<Code2 className="h-5 w-5" />}
        />
        <InfoCard
          title="On-Chain Inspector"
          description="Query balances, read contract state, and decode transactions directly from the command line."
          icon={<Terminal className="h-5 w-5" />}
        />
        <InfoCard
          title="Key Management"
          description="Securely store and manage private keys and mnemonics with OS keychain integration."
          icon={<KeyRound className="h-5 w-5" />}
        />
      </div>

      <h2 id="commands">CLI Commands</h2>
      <p>
        A reference of the most commonly used commands:
      </p>

      <h3>Project Management</h3>
      <pre>
        <code>{`# Scaffold a new project
acme init my-project --template erc20

# Add a new contract to an existing project
acme generate contract MyToken --standard erc20

# Compile all contracts
acme compile

# Run tests
acme test`}</code>
      </pre>

      <h3>Deployment</h3>
      <pre>
        <code>{`# Deploy to a specific network
acme deploy --network sepolia

# Deploy with CREATE2 for deterministic addresses
acme deploy --network mainnet --create2 --salt 0x01

# Verify deployed contracts
acme verify --network sepolia --address 0x1234...`}</code>
      </pre>

      <h3>On-Chain Queries</h3>
      <pre>
        <code>{`# Check ETH balance
acme balance 0xAddress... --network mainnet

# Read a contract function
acme call 0xContract... "balanceOf(address)" 0xOwner... --network mainnet

# Decode a transaction
acme decode-tx 0xTxHash... --network mainnet

# Get gas price
acme gas --network mainnet`}</code>
      </pre>

      <h2 id="codegen">Code Generation</h2>
      <p>
        The <code>acme generate</code> command creates type-safe TypeScript
        bindings from Solidity contracts or ABI files:
      </p>
      <pre>
        <code>{`# From a Solidity file
acme generate bindings ./contracts/MyToken.sol --out ./src/bindings/

# From an ABI JSON file
acme generate bindings ./abis/MyToken.json --out ./src/bindings/

# From a deployed & verified contract
acme generate bindings 0x1234... --network mainnet --out ./src/bindings/`}</code>
      </pre>
      <p>
        Generated bindings include fully typed read/write methods, event
        listeners, and deployment functions. They work with any ethers.js or
        viem signer.
      </p>

      <h2 id="abi-tools">ABI Tools</h2>
      <p>
        Utilities for working with contract ABIs:
      </p>
      <pre>
        <code>{`# Pretty-print an ABI
acme abi show ./abis/MyToken.json

# Extract function selectors
acme abi selectors ./abis/MyToken.json

# Diff two ABIs
acme abi diff ./abis/v1.json ./abis/v2.json

# Merge multiple ABIs (useful for diamond proxies)
acme abi merge ./abis/facet1.json ./abis/facet2.json --out merged.json`}</code>
      </pre>

      <h2 id="testing-tools">Testing Utilities</h2>
      <p>
        Beyond the Hardhat plugin, Acme provides standalone testing tools:
      </p>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Local Fork Runner"
          description="Spin up a local fork of any network with a single command. Pre-seeds accounts with ETH and common tokens."
          icon={<TestTube className="h-5 w-5" />}
        />
        <InfoCard
          title="Transaction Replayer"
          description="Replay historical transactions on a local fork to reproduce bugs and verify fixes."
          icon={<ScrollText className="h-5 w-5" />}
        />
      </div>
      <pre>
        <code>{`# Start a local fork of mainnet
acme fork mainnet --port 8545

# Replay a specific transaction
acme replay 0xTxHash... --network mainnet --fork-port 8545

# Run a test suite against a fork
acme test --fork mainnet`}</code>
      </pre>

      <h2 id="security">Security Scanner</h2>
      <p>
        Run static analysis on your contracts to detect common vulnerability
        patterns:
      </p>
      <pre>
        <code>{`# Scan all contracts in the project
acme scan

# Scan a specific file
acme scan ./contracts/MyToken.sol

# Output results as JSON
acme scan --format json --output ./reports/security.json`}</code>
      </pre>
      <p>
        The scanner checks for reentrancy, unchecked return values, integer
        overflow (pre-0.8.0), access control issues, and more. Severity levels
        range from <code>info</code> to <code>critical</code>.
      </p>

      <h2 id="configuration">Configuration</h2>
      <p>
        Tools are configured through the <code>acme.config.ts</code> file at
        the root of your project:
      </p>
      <pre>
        <code>{`// acme.config.ts
import { defineConfig } from "@acme/cli";

export default defineConfig({
  defaultNetwork: "sepolia",
  networks: {
    mainnet: { rpc: process.env.ETH_RPC },
    sepolia: { rpc: process.env.SEPOLIA_RPC },
    arbitrum: { rpc: process.env.ARBITRUM_RPC },
  },
  compiler: {
    solidity: "0.8.24",
    optimizer: { enabled: true, runs: 200 },
  },
  codegen: {
    outputDir: "./src/bindings",
    typechain: true,
  },
  scanner: {
    severityThreshold: "medium",
    ignorePaths: ["test/", "scripts/"],
  },
});`}</code>
      </pre>
    </div>
  )
}
