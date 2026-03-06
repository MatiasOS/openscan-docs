import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader, InfoCard } from "@/components/docs-components"
import {
  Monitor,
  Database,
  ShieldCheck,
  Palette,
  Key,
  TestTube,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Settings",
  description:
    "Explorer settings reference: appearance, language, cache management, RPC strategies, API keys, endpoint configuration, and MetaMask integration.",
}

export default function SettingsPage() {
  return (
    <div className="prose">
      <PageHeader
        title="Settings"
        description="Configure every aspect of the Explorer — from appearance and language to RPC strategies, API keys, and per-network endpoint management."
      />

      {/* ── Appearance ───────────────────────────────────── */}
      <h2 id="appearance">Appearance</h2>
      <p>
        Control the visual presentation of the Explorer:
      </p>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Theme"
          description="Switch between dark and light themes. The preference is saved locally and persists across sessions."
          icon={<Palette className="h-5 w-5" />}
        />
        <InfoCard
          title="Background Animation"
          description="Toggle the animated blocks background on or off. Disabling it can improve performance on lower-end devices."
          icon={<Monitor className="h-5 w-5" />}
        />
      </div>

      {/* ── Language ─────────────────────────────────────── */}
      <h2 id="language">Language</h2>
      <p>
        The Explorer supports multiple languages. Select your preferred language
        from the settings page:
      </p>
      <ul>
        <li>🇺🇸 English</li>
        <li>🇦🇷 Spanish</li>
        <li>🇨🇳 Chinese</li>
        <li>🇯🇵 Japanese</li>
        <li>🇧🇷 Portuguese (BR)</li>
      </ul>
      <p>
        The language preference is stored locally and applied across the entire
        interface.
      </p>

      {/* ── Cache Management ─────────────────────────────── */}
      <h2 id="cache-management">Cache Management</h2>
      <p>
        The Explorer caches blockchain data locally to reduce RPC calls and
        speed up navigation. The settings page provides controls for managing
        this cached data:
      </p>
      <div className="not-prose grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <InfoCard
          title="Clear All"
          description="Wipe all cached data and site storage in one action."
          icon={<Database className="h-5 w-5" />}
        />
        <InfoCard
          title="Selective Clearing"
          description="Clear individual cache stores (blocks, transactions, addresses, contracts) independently."
          icon={<Database className="h-5 w-5" />}
        />
        <InfoCard
          title="Size Inspection"
          description="View per-category and total cache sizes. Available when super-user mode is enabled."
          icon={<ShieldCheck className="h-5 w-5" />}
        />
      </div>

      {/* ── RPC Strategy ─────────────────────────────────── */}
      <h2 id="rpc-strategy">RPC Strategy</h2>
      <p>
        Choose how the Explorer routes requests to your configured RPC
        endpoints:
      </p>
      <ul>
        <li>
          <strong>Fallback</strong> — Uses the primary endpoint and falls back
          to alternatives only when a request fails. Minimizes redundant calls.
          Best for limited internet connections.
        </li>
        <li>
          <strong>Parallel</strong> — Sends requests to multiple endpoints at
          once and uses the first successful response. Configure the maximum
          number of concurrent requests. Let you know if any RPC is returning
          incorrect data.
        </li>
        <li>
          <strong>Race</strong> — Optimized for speed: returns the fastest
          response and cancels remaining requests.
        </li>
      </ul>

      {/* ── API Keys ─────────────────────────────────────── */}
      <h2 id="api-keys">API Keys</h2>
      <p>
        Manage API keys for third-party providers from a single panel. Keys are
        stored locally in the browser and are only sent directly to the
        respective provider.
      </p>
      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Infura and Alchemy"
          description="Add your Infura project ID and Alchemy API key to unlock their respective RPC endpoints."
          icon={<Key className="h-5 w-5" />}
        />
        <InfoCard
          title="AI Providers"
          description="Configure API keys for AI-powered features within the Explorer."
          icon={<Key className="h-5 w-5" />}
        />
      </div>

      {/* ── Per-Network RPC Editor ───────────────────────── */}
      <h2 id="rpc-editor">Per-Network RPC Editor</h2>
      <p>
        Each supported network has its own endpoint list that you can fully
        customize:
      </p>
      <ul>
        <li>
          <strong>Add</strong> — Enter a custom RPC URL for any network.
        </li>
        <li>
          <strong>Remove</strong> — Delete endpoints you no longer need.
        </li>
        <li>
          <strong>Reorder</strong> — Drag endpoints to set priority order for
          fallback strategies.
        </li>
        <li>
          <strong>Copy & Sync</strong> — Duplicate an endpoint configuration or
          sync from defaults.
        </li>
        <li>
          <strong>Re-rank</strong> — Automatically reorder endpoints based on
          latency test results.
        </li>
        <li>
          <strong>Tagging</strong> — Classify endpoints as open-source, private,
          or tracking.
        </li>
      </ul>

      {/* ── RPC Testing ──────────────────────────────────── */}
      <h2 id="rpc-testing">RPC Testing</h2>
      <p>
        Verify the health and performance of your endpoints without leaving the
        settings area:
      </p>
      <div className="not-prose grid gap-4 sm:grid-cols-1 mb-8">
        <InfoCard
          title="Test and results"
          description="Run a health check against every endpoint for the selected network in one action. View status, latency, latest block, tracking classification, and active state for each endpoint."
          icon={<TestTube className="h-5 w-5" />}
        />
      </div>
      <p>
        Results can be sorted by provider name, latency, or status. You can
        retest individual endpoints at any time.
      </p>

      {/* ── MetaMask Integration ─────────────────────────── */}
      <h2 id="metamask-integration">MetaMask Integration</h2>
      <p>
        Set the Explorer as the default block explorer for any supported EVM
        chain directly from the settings page. When configured, clicking
        &quot;View on explorer&quot; links in MetaMask will open the Explorer
        instead of the default Etherscan-based URL.
      </p>

      {/* ── Super-User Mode ──────────────────────────────── */}
      <h2 id="super-user-mode">Super-User Mode</h2>
      <p>
        A toggle in the settings page that unlocks advanced controls throughout
        the Explorer. When enabled, additional panels and actions become
        visible — including persistent cache size inspection, manual cache
        clearing per store, and extended debugging information. The toggle state
        persists across sessions. Learn more in the{" "}
        <Link href="/explorer/super-user">Super-User Mode</Link> page.
      </p>
    </div>
  )
}
