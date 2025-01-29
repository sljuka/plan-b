import { Share, Copy, Download } from "lucide-react"
import QRCode from "react-qr-code"

export default function QRShare() {
  const handleShare = async () => {
    try {
      const canvas = document.querySelector("canvas")
      if (canvas) {
        const blob = await new Promise((resolve) => canvas.toBlob(resolve))
        if (blob) {
          await navigator.share({
            files: [new File([blob], "qr-code.png", { type: "image/png" })],
          })
        }
      }
    } catch (error) {
      console.error("Error sharing:", error)
    }
  }

  const handleCopy = () => {
    // Add copy functionality
    console.log("Copy QR data")
  }

  const handleSaveImage = async () => {
    const canvas = document.querySelector("canvas")
    if (canvas) {
      const image = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.href = image
      link.download = "qr-code.png"
      link.click()
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-[280px] space-y-4">
        <div className="bg-white p-4 rounded-xl">
          <QRCode value="Your QR code data here" className="w-full h-auto" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={handleShare}
            className="flex flex-col items-center justify-center gap-2 py-3 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-medium"
          >
            <Share className="w-5 h-5" />
            Share
          </button>
          <button
            onClick={handleCopy}
            className="flex flex-col items-center justify-center gap-2 py-3 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-medium"
          >
            <Copy className="w-5 h-5" />
            Copy
          </button>
          <button
            onClick={handleSaveImage}
            className="flex flex-col items-center justify-center gap-2 py-3 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-medium"
          >
            <Download className="w-5 h-5" />
            Save as image
          </button>
        </div>
      </div>
    </div>
  )
}

