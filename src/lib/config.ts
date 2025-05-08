import { porto } from 'porto/wagmi'
import { http, createConfig, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [porto()],
  storage: createStorage({
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
  }),
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})