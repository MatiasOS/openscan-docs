const NETWORK_ICON_BASE =
  "https://cdn.jsdelivr.net/npm/@openscan/metadata@1.1.1-alpha.0/dist/assets/networks"

const NETWORK_ICON_MAP: Record<string, string> = {
  Ethereum: "1",
  Optimism: "10",
  "BNB Smart Chain": "56",
  "BNB Testnet": "97",
  Polygon: "137",
  Base: "8453",
  "Arbitrum One": "42161",
  "Sepolia Testnet": "11155111",
  "Bitcoin Mainnet": "bitcoin-mainnet",
  "Bitcoin Testnet3": "bitcoin-mainnet",
  "Bitcoin Testnet4": "bitcoin-mainnet",
  "Bitcoin Signet": "bitcoin-mainnet",
  Bitcoin: "bitcoin-mainnet",
}

interface NetworkIconProps {
  network: string
  className?: string
}

export function NetworkIcon({ network, className = "h-5 w-5" }: NetworkIconProps) {
  const file = NETWORK_ICON_MAP[network]
  if (!file) return null
  return (
    <img
      src={`${NETWORK_ICON_BASE}/${file}.svg`}
      alt={network}
      className={className}
    />
  )
}
