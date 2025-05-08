import { Button } from "@/components/ui/button"
import { ConnectKitButton } from "connectkit"


export default function ConnectButton() {
  return (
    <ConnectKitButton.Custom>
    {({ isConnected, show, address, truncatedAddress }) => {
      return (
        <Button className="w-full rounded-xl" size="lg" onClick={show}>
        Connect
      </Button>
      )
    }}
    </ConnectKitButton.Custom>
  )
}