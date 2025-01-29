import { useState } from "react"
import { ArrowLeft, Download, Share, Copy } from "lucide-react"
import QRCode from "react-qr-code"

export default function BtcBoard() {
  const [amount, setAmount] = useState("0")
  const [step, setStep] = useState("amount")

  const handleNumberClick = (num) => {
    if (amount === "0") {
      setAmount(num)
    } else {
      setAmount(amount + num)
    }
  }

  const handleBackspace = () => {
    if (amount.length > 1) {
      setAmount(amount.slice(0, -1))
    } else {
      setAmount("0")
    }
  }

  const formatSats = (num) => {
    const parts = []
    let temp = num
    while (temp.length > 0) {
      parts.unshift(temp.slice(-3))
      temp = temp.slice(0, -3)
    }
    return parts.join(" ")
  }

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
    <div className="h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-[280px]">
        <div className="text-center mb-3">
          <div className="inline-block p-2 rounded-full bg-zinc-800 mb-1.5">
            <Download className="w-5 h-5" />
          </div>
          <h1 className="text-lg font-medium">Receive bitcoin</h1>
          <div className="text-xl font-mono mt-1">{formatSats(amount)} sats</div>
        </div>

        {step === "amount" ? (
          <>
            <div className="text-center text-zinc-500 mb-3 text-sm">Enter amount...</div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                  key={num}
                  onClick={() => handleNumberClick(num.toString())}
                  className="h-12 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-lg font-medium"
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => handleNumberClick("0")}
                className="h-12 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-lg font-medium"
              >
                0
              </button>
              <button
                onClick={handleBackspace}
                className="h-12 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
            <button
              onClick={() => setStep("qr")}
              className="w-full h-10 rounded-lg bg-[#F89B2A] hover:bg-[#e88d1f] text-black font-medium text-sm"
            >
              Next
            </button>
          </>
        ) : (
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg">
              <QRCode value={`bitcoin:?amount=${amount}`} className="w-full h-auto" />
            </div>
            <input
              type="text"
              placeholder="Description"
              className="w-full h-10 bg-zinc-900 border border-zinc-800 rounded-lg px-3 text-sm"
            />
            <button
              onClick={handleCopy}
              className="w-full h-10 rounded-lg bg-[#F89B2A] hover:bg-[#e88d1f] text-black font-medium text-sm"
            >
              Copy invoice
            </button>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={handleShare}
                className="flex flex-col items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-medium"
              >
                <Share className="w-5 h-5" />
                Share
              </button>
              <button
                onClick={handleCopy}
                className="flex flex-col items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-medium"
              >
                <Copy className="w-5 h-5" />
                Copy
              </button>
              <button
                onClick={handleSaveImage}
                className="flex flex-col items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-medium"
              >
                <Download className="w-5 h-5" />
                Save as image
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

