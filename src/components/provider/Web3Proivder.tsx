"use client";
import { WagmiProvider } from "wagmi";
import { config } from "@/lib/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider } from "connectkit";

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
            <ConnectKitProvider>
                {children}
            </ConnectKitProvider>
        </QueryClientProvider>
    </WagmiProvider>
  );
};
