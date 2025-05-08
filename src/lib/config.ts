import { getDefaultConfig } from 'connectkit'
import { porto } from 'porto/wagmi'
import { http, createConfig, createStorage, fallback, webSocket } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'


export const config = createConfig(
    getDefaultConfig({
    chains: [mainnet, sepolia],
    connectors: [porto()],
    storage: createStorage({
        storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    }),
    transports: {
      [mainnet.id]: fallback([http("https://eth.drpc.org"), webSocket("wss://eth.drpc.org")]),
      [sepolia.id]: fallback([http("https://sepolia.drpc.org"), webSocket("wss://sepolia.drpc.org")]),
    },
    appName: "ehex",
    // Optional App Info
    appDescription: "erection hex",
    appUrl: "https://ehex.app", // your app's url
    appIcon: "https://ehex.app/images/logo.png", // your app's icon
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
  }),
);