import { CowSwapWidget, CowSwapWidgetParams, TradeType } from '@cowprotocol/widget-react'

export default function Home() {
  const params: CowSwapWidgetParams = {
    "appCode": "My Cool App", // Name of your app (max 50 characters)
    "width": "450px", // Width in pixels (or 100% to use all available space)
    "height": "640px",
    "provider": window.ethereum, // Ethereum EIP-1193 provider. For a quick test, you can pass `window.ethereum`, but consider using something like https://web3modal.com
    "chainId": 1, // 1 (Mainnet), 100 (Gnosis), 11155111 (Sepolia)
    "tokenLists": [ // All default enabled token lists. Also see https://tokenlists.org
        "https://files.cow.fi/tokens/CowSwap.json",
        "https://tokens.coingecko.com/uniswap/all.json"
    ],
    "tradeType": TradeType.SWAP, // TradeType.SWAP, TradeType.LIMIT or TradeType.ADVANCED
    "sell": { // Sell token. Optionally add amount for sell orders
        "asset": "USDC",
        "amount": "100000"
    },
    "buy": { // Buy token. Optionally add amount for buy orders
        "asset": "COW",
        "amount": "0"
    },
    "enabledTradeTypes": [ // TradeType.SWAP, TradeType.LIMIT and/or TradeType.ADVANCED
        TradeType.SWAP,
        TradeType.LIMIT,
        TradeType.ADVANCED
    ],
    "theme": { // light/dark or provide your own color palette
        "baseTheme": "dark",
        "primary": "#46a35b",
        "paper": "#0c200c"
    },
    "interfaceFeeBips": "50" // 0.5% - COMING SOON! Fill the form above if you are interested
}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CowSwapWidget params={params} />
    </main>
  );
}