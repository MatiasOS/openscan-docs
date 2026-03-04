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
  Bot,
  Globe,
  Lock,
  Search,
  Zap,
} from "lucide-react"
import { NetworkIcon } from "@/components/network-icon"

export const metadata: Metadata = {
  title: "Skills — OpenScan Crypto",
  description:
    "OpenClaw skill for querying blockchain data via OpenScan infrastructure. Supports Ethereum, Bitcoin, Arbitrum, Optimism, Base, Polygon, BNB, and Sepolia.",
}

export default function SkillsPage() {
  return (
    <div className="prose">
      <PageHeader
        title="OpenScan Crypto Skill"
        description="An OpenClaw skill for querying blockchain data via OpenScan infrastructure. Supports Ethereum, Bitcoin, Arbitrum, Optimism, Base, Polygon, BNB, and Sepolia. All results include a direct explorerLink to the OpenScan explorer."
      />

      <h2 id="overview">Overview</h2>
      <p>
        The OpenScan Crypto skill gives your agent the ability to navigate and query
        crypto networks using OpenScan&apos;s infrastructure. Data comes
        from <code>@openscan/metadata</code> (CDN)
        and <code>@openscan/network-connectors</code> (RPC).
      </p>
      <p>
        Once installed, OpenClaw will automatically make the skill available to the
        agent. Just ask naturally:
      </p>
      <ul>
        <li>&quot;What&apos;s vitalik.eth&apos;s ETH balance?&quot;</li>
        <li>&quot;Show me the latest Ethereum block&quot;</li>
        <li>&quot;What&apos;s gas like on Arbitrum?&quot;</li>
        <li>&quot;Did this transaction succeed? 0x...&quot;</li>
        <li>&quot;How much USDC does 0x... have on Base?&quot;</li>
        <li>&quot;What&apos;s the Bitcoin mempool looking like?&quot;</li>
        <li>&quot;Check this BTC address: 1A1z...&quot;</li>
      </ul>

      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Multi-Chain"
          description="Query Ethereum, Bitcoin, Arbitrum, Optimism, Base, Polygon, BNB, and Sepolia from a single skill."
          icon={<Globe className="h-5 w-5" />}
        />
        <InfoCard
          title="Read-Only & Secure"
          description="No transaction signing, no private keys. Uses public RPCs with optional --private flag for tracking:none endpoints."
          icon={<Lock className="h-5 w-5" />}
        />
        <InfoCard
          title="Agent-Ready"
          description="All commands output JSON to stdout. Numeric values are pre-formatted. The agent can parse and present results naturally."
          icon={<Bot className="h-5 w-5" />}
        />
        <InfoCard
          title="Explorer Links"
          description="Every on-chain entity result includes an explorerLink pointing to openscan.eth.link for further exploration."
          icon={<Search className="h-5 w-5" />}
        />
      </div>

      <h2 id="installation">Installation</h2>
      <p>
        Install via <a href="https://clawhub.com">ClawHub</a>:
      </p>
      <pre>
        <code>{`clawhub install openscan-crypto`}</code>
      </pre>
      <p>
        Or manually, by cloning the repo into your
        workspace <code>skills/</code> folder and running:
      </p>
      <pre>
        <code>{`bash install.sh`}</code>
      </pre>
      <p>
        This installs the <code>@openscan/network-connectors</code> npm dependency
        required by the skill.
      </p>

      <h3 id="cli-location">CLI Location</h3>
      <pre>
        <code>{`skills/openscan-crypto/scripts/crypto-cli.mjs`}</code>
      </pre>
      <p>
        Run with: <code>{`node <skill_dir>/scripts/crypto-cli.mjs <command> [args]`}</code>
      </p>

      <h2 id="evm-commands">EVM Commands</h2>
      <p>
        All EVM commands accept <code>--chain &lt;chain&gt;</code> (default: ethereum)
        and <code>--private</code> (use tracking:none RPCs only). Address fields accept
        ENS names (e.g. <code>vitalik.eth</code>).
      </p>

      <h3 id="address-info">Address Info</h3>
      <p>
        Aggregate address information in a single call — fires balance, code, and nonce
        in parallel, then enriches with ENS reverse resolution and metadata label lookup.
      </p>
      <pre>
        <code>{`crypto-cli.mjs address-info <address>
crypto-cli.mjs address-info vitalik.eth
crypto-cli.mjs address-info <address> --chain base
crypto-cli.mjs address-info <address> --private`}</code>
      </pre>
      <p>Returns:</p>
      <ul>
        <li><strong>type</strong> — <code>EOA</code> or <code>contract</code> (with <code>codeSize</code> if contract)</li>
        <li><strong>balance</strong> — native balance (ETH/MATIC/BNB, etc.)</li>
        <li><strong>txCount</strong> — total transaction count (nonce)</li>
        <li><strong>ensName</strong> — primary ENS name via reverse lookup (Ethereum mainnet only)</li>
        <li><strong>label</strong> — metadata label if the address is a known entity</li>
        <li><strong>explorerLink</strong> — direct link to the OpenScan explorer</li>
      </ul>

      <h3 id="balance">Balance</h3>
      <pre>
        <code>{`crypto-cli.mjs balance <address>                           # Native balance (ETH)
crypto-cli.mjs balance vitalik.eth                          # ENS name supported
crypto-cli.mjs balance <address> --token USDC              # + ERC20 balance
crypto-cli.mjs balance <address> --chain arbitrum           # On Arbitrum
crypto-cli.mjs balance <address> --token USDC --chain base  # USDC on Base`}</code>
      </pre>

      <h3 id="multi-balance">Multi-Chain Balance</h3>
      <pre>
        <code>{`crypto-cli.mjs multi-balance <address>           # All mainnet chains
crypto-cli.mjs multi-balance vitalik.eth          # ENS supported
crypto-cli.mjs multi-balance <address> --private # Privacy RPCs only`}</code>
      </pre>
      <p>
        Queries the same address across all mainnet EVM chains in parallel. Shows
        balances sorted by chains with funds first.
      </p>

      <h3 id="block">Block</h3>
      <pre>
        <code>{`crypto-cli.mjs block                    # Latest block
crypto-cli.mjs block 19000000           # By number
crypto-cli.mjs block 0xabcdef...        # By hash (66 chars)`}</code>
      </pre>
      <p>
        Returns: number, hash, timestamp, gasUsed, gasLimit, baseFee, txCount, miner.
      </p>

      <h3 id="transaction">Transaction &amp; Receipt</h3>
      <pre>
        <code>{`crypto-cli.mjs tx <0xhash>                        # Transaction details
crypto-cli.mjs tx <0xhash> --chain arbitrum       # On another chain
crypto-cli.mjs receipt <0xhash>                    # Receipt + decoded logs`}</code>
      </pre>

      <h3 id="decode-tx">Decode Transaction</h3>
      <pre>
        <code>{`crypto-cli.mjs decode-tx <0xhash>
crypto-cli.mjs decode-tx <0xhash> --chain arbitrum`}</code>
      </pre>
      <p>
        Decodes transaction input data into human-readable function name + parameters.
        Also decodes all event logs in the receipt. Uses local database of known
        selectors + 4byte.directory fallback. Identifies tx type: transfer,
        contract_call, or contract_creation.
      </p>

      <h3 id="gas">Gas Prices</h3>
      <pre>
        <code>{`crypto-cli.mjs gas                      # Ethereum gas
crypto-cli.mjs gas --chain base         # Base gas
crypto-cli.mjs gas --chain arbitrum     # Arbitrum gas`}</code>
      </pre>
      <p>
        Returns: gasPrice, maxPriorityFeePerGas, baseFee — all in gwei.
      </p>

      <h3 id="price">On-Chain Price</h3>
      <pre>
        <code>{`crypto-cli.mjs price                    # ETH price (default)
crypto-cli.mjs price BTC                # BTC price (via WBTC pools)
crypto-cli.mjs price --chain polygon    # MATIC price
crypto-cli.mjs price --chain bnb        # BNB price`}</code>
      </pre>
      <p>
        100% on-chain, no CoinGecko. Fetches from Uniswap V2-style DEX pools. Uses
        median of multiple pools for manipulation resistance.
      </p>

      <h3 id="other-evm">Other EVM Commands</h3>
      <pre>
        <code>{`crypto-cli.mjs call <to> <calldata> [--block <tag>]   # eth_call (raw contract read)
crypto-cli.mjs logs --address <addr> [--topic <t>]    # Event logs (up to 50)
crypto-cli.mjs code <address>                          # Contract code / EOA check
crypto-cli.mjs nonce <address>                         # Transaction count`}</code>
      </pre>

      <h2 id="bitcoin-commands">Bitcoin Commands</h2>
      <p>
        Bitcoin queries use the mempool.space REST API.
      </p>
      <pre>
        <code>{`crypto-cli.mjs btc-info                 # Overview: height, mempool, fees
crypto-cli.mjs btc-block [height|hash]  # Block details
crypto-cli.mjs btc-tx <txid>            # Transaction details
crypto-cli.mjs btc-mempool              # Mempool state + 5 most recent txs
crypto-cli.mjs btc-fee                  # Fee rates (fastest, halfHour, hour, economy)
crypto-cli.mjs btc-address <address>    # Balance + tx count + UTXO count`}</code>
      </pre>

      <h2 id="metadata-commands">Metadata Commands</h2>
      <pre>
        <code>{`crypto-cli.mjs networks                                    # List supported networks
crypto-cli.mjs rpcs <chain> [--private]                    # RPC endpoints
crypto-cli.mjs token <symbol|address> [--chain <chain>]    # Token lookup
crypto-cli.mjs events [--chain <chain>]                    # Known event signatures
crypto-cli.mjs decode-event <topic_hash>                   # Decode event topic
crypto-cli.mjs addresses [--chain <chain>]                 # Labeled addresses
crypto-cli.mjs profile <type> <id>                         # Network/app/token profile`}</code>
      </pre>

      <h2 id="rpc-management">RPC Management</h2>
      <p>
        RPCs are persisted in <code>~/.config/openscan-crypto/rpc-config.json</code>.
        On first use, the skill auto-fetches from <code>@openscan/metadata</code> and
        selects privacy-first RPCs.
      </p>
      <pre>
        <code>{`# Fetch/sync RPCs from metadata
crypto-cli.mjs rpc-fetch                          # Sync all networks
crypto-cli.mjs rpc-fetch ethereum                 # Sync specific network

# List RPCs
crypto-cli.mjs rpc-list ethereum                  # Active (configured) RPCs
crypto-cli.mjs rpc-list ethereum --all            # ALL available from metadata
crypto-cli.mjs rpc-list ethereum --all --private  # Only tracking:none

# Configure RPCs
crypto-cli.mjs rpc-set ethereum --strategy race         # Set strategy
crypto-cli.mjs rpc-set ethereum --add https://my-rpc.com  # Add custom RPC
crypto-cli.mjs rpc-set ethereum --remove https://rpc.com  # Remove an RPC
crypto-cli.mjs rpc-set ethereum --rpcs url1 url2 url3   # Replace all
crypto-cli.mjs rpc-set ethereum --private-only           # Keep only tracking:none
crypto-cli.mjs rpc-set ethereum --reset                  # Reset to defaults
crypto-cli.mjs rpc-set --default-strategy parallel       # Global default strategy
crypto-cli.mjs rpc-set --max-rpcs 3                      # Global max RPCs per network

# Reorder RPCs
crypto-cli.mjs rpc-order ethereum --benchmark            # Auto-sort by latency
crypto-cli.mjs rpc-order ethereum --swap 1 3             # Swap positions

# Test/benchmark RPCs
crypto-cli.mjs rpc-test ethereum                  # Test configured RPCs
crypto-cli.mjs rpc-test ethereum --all            # Test ALL from metadata
crypto-cli.mjs rpc-test ethereum <url>            # Test specific URL

# View/set strategy
crypto-cli.mjs rpc-strategy                       # View current
crypto-cli.mjs rpc-strategy parallel              # Set global default`}</code>
      </pre>
      <p>
        <strong>Strategies:</strong>
      </p>
      <ul>
        <li><strong>fallback</strong> — Try RPCs in order, move to next on failure. Default. Most conservative.</li>
        <li><strong>race</strong> — Fire all RPCs simultaneously, use fastest response. Best for latency.</li>
        <li><strong>parallel</strong> — Fire all, compare results, detect inconsistencies. Trustless verification.</li>
      </ul>

      <h2 id="chain-aliases">Chain Aliases</h2>
      <div className="not-prose mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Alias</TableHead>
              <TableHead>Chain ID</TableHead>
              <TableHead>Network</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell><code>ethereum</code>, <code>eth</code>, <code>mainnet</code></TableCell>
              <TableCell>1</TableCell>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="Ethereum" className="h-4 w-4" />Ethereum</span></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>optimism</code>, <code>op</code></TableCell>
              <TableCell>10</TableCell>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="Optimism" className="h-4 w-4" />Optimism</span></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>bnb</code>, <code>bsc</code></TableCell>
              <TableCell>56</TableCell>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="BNB Smart Chain" className="h-4 w-4" />BNB Smart Chain</span></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>polygon</code>, <code>matic</code>, <code>pol</code></TableCell>
              <TableCell>137</TableCell>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="Polygon" className="h-4 w-4" />Polygon</span></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>base</code></TableCell>
              <TableCell>8453</TableCell>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="Base" className="h-4 w-4" />Base</span></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>arbitrum</code>, <code>arb</code></TableCell>
              <TableCell>42161</TableCell>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="Arbitrum One" className="h-4 w-4" />Arbitrum One</span></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>sepolia</code></TableCell>
              <TableCell>11155111</TableCell>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="Sepolia Testnet" className="h-4 w-4" />Sepolia Testnet</span></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>bitcoin</code>, <code>btc</code></TableCell>
              <TableCell>bip122:...</TableCell>
              <TableCell><span className="flex items-center gap-2"><NetworkIcon network="Bitcoin Mainnet" className="h-4 w-4" />Bitcoin Mainnet</span></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <p>
        Numeric chain IDs also work (e.g., <code>1</code>, <code>42161</code>).
      </p>

      <h2 id="output">Output Format</h2>
      <p>
        All commands output JSON. Numeric values are pre-formatted:
      </p>
      <ul>
        <li><strong>Balances</strong>: human-readable (e.g., &quot;32.12 ETH&quot;) + raw wei</li>
        <li><strong>Gas</strong>: in gwei</li>
        <li><strong>Timestamps</strong>: ISO 8601</li>
        <li><strong>Hex numbers</strong>: converted to decimal strings</li>
      </ul>

      <h3 id="explorer-links">Explorer Links</h3>
      <p>
        EVM and Bitcoin commands that return on-chain entities include
        an <code>explorerLink</code> field pointing
        to <a href="https://openscan.eth.link">openscan.eth.link</a>:
      </p>
      <pre>
        <code>{`{
  "address": "0xd8dA...",
  "nativeBalance": "1234.5 ETH",
  "explorerLink": "https://openscan.eth.link/#/1/address/0xd8dA..."
}`}</code>
      </pre>
      <p>URL patterns:</p>
      <ul>
        <li>EVM: <code>{`https://openscan.eth.link/#/{chainId}/{type}/{id}`}</code></li>
        <li>Bitcoin mainnet: <code>{`https://openscan.eth.link/#/btc/{type}/{id}`}</code></li>
        <li>Bitcoin testnet4: <code>{`https://openscan.eth.link/#/tbtc/{type}/{id}`}</code></li>
      </ul>

      <h2 id="ens-support">ENS Support</h2>
      <p>
        All EVM address commands accept <code>.eth</code> names
        (e.g., <code>vitalik.eth</code>). ENS is resolved on Ethereum mainnet
        automatically. Works
        with: <code>balance</code>, <code>multi-balance</code>, <code>code</code>, <code>nonce</code>, <code>address-info</code>.
      </p>

      <h2 id="security">Security</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Read-Only"
          description="No transaction signing, no private key handling. Dangerous methods like sendTransaction are not exposed."
          icon={<Lock className="h-5 w-5" />}
        />
        <InfoCard
          title="No API Keys"
          description="Uses public RPC endpoints. The --private flag restricts to tracking:none RPCs for enhanced privacy."
          icon={<Zap className="h-5 w-5" />}
        />
      </div>
      <p>
        Metadata is cached locally in <code>~/.cache/openscan-crypto/</code> with
        a 6-hour TTL. RPC responses are not cached.
      </p>

      <h2 id="natural-language">Natural Language Mapping</h2>
      <div className="not-prose mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User Says</TableHead>
              <TableHead>Command</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>&quot;What&apos;s Vitalik&apos;s ETH balance?&quot;</TableCell>
              <TableCell><code>balance 0xd8dA...96045</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&quot;How much USDC does 0x... have on Base?&quot;</TableCell>
              <TableCell><code>balance 0x... --token USDC --chain base</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&quot;Show the latest Ethereum block&quot;</TableCell>
              <TableCell><code>block latest</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&quot;What&apos;s gas like on Arbitrum?&quot;</TableCell>
              <TableCell><code>gas --chain arbitrum</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&quot;Did this tx succeed?&quot;</TableCell>
              <TableCell><code>receipt 0x...</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&quot;Is 0x... a contract?&quot;</TableCell>
              <TableCell><code>address-info 0x...</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&quot;Show vitalik.eth balance on all chains&quot;</TableCell>
              <TableCell><code>multi-balance vitalik.eth</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&quot;What networks does OpenScan support?&quot;</TableCell>
              <TableCell><code>networks</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&quot;What&apos;s the USDC contract address?&quot;</TableCell>
              <TableCell><code>token USDC</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&quot;Show privacy-friendly Polygon RPCs&quot;</TableCell>
              <TableCell><code>rpcs polygon --private</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&quot;What&apos;s the latest Bitcoin block?&quot;</TableCell>
              <TableCell><code>btc-info</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&quot;How full is the Bitcoin mempool?&quot;</TableCell>
              <TableCell><code>btc-mempool</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&quot;What are Bitcoin fees right now?&quot;</TableCell>
              <TableCell><code>btc-fee</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&quot;Check this BTC address&quot;</TableCell>
              <TableCell><code>btc-address 1A1zP1...</code></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
