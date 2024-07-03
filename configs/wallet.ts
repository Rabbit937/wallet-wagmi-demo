import { http, createConfig } from "wagmi"
import { arbitrum, immutableZkEvm, mainnet, optimism, polygon } from "wagmi/chains"
import { injected, walletConnect } from "wagmi/connectors"

const projectId = "a7e8d0307cb18abe347dd1636c9a2bc1"

export const wConnector = walletConnect({
    projectId,
    metadata: {
        name: "Wagmi",
        description: "Wagmi wallet connect",
        url: "https://wagmi.xyz",
        icons: ["https://wagmi.xyz/logo.png"],
    }
})

export const config = createConfig({
    chains: [mainnet, arbitrum, optimism, immutableZkEvm, polygon],
    transports: {
        [mainnet.id]: http(),
        [arbitrum.id]: http(),
        [optimism.id]: http(),
        [immutableZkEvm.id]: http(),
        [polygon.id]: http()
    },
    connectors: [wConnector, injected()]
})