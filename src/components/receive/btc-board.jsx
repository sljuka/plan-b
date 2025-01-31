import { useState } from "react";
import { ArrowLeft, Download, Copy, ArrowLeftIcon } from "lucide-react";
import QRCode from "react-qr-code";
import useCreateInvoice from "@/hooks/create-invoice";
import { shortStr } from "@/utils/shortStr";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function BtcBoard() {
  const [amount, setAmount] = useState("0");
  const { toast } = useToast();
  const [step, setStep] = useState("amount");
  const [memo, setMemo] = useState("");
  const [invoice, setInvoice] = useState(null);
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useCreateInvoice();

  const handleNumberClick = (num) => {
    if (amount === "0") {
      setAmount(num);
    } else {
      setAmount(amount + num);
    }
  };

  const handleBackspace = () => {
    if (amount.length > 1) {
      setAmount(amount.slice(0, -1));
    } else {
      setAmount("0");
    }
  };

  const formatSats = (num) => {
    const parts = [];
    let temp = num;
    while (temp.length > 0) {
      parts.unshift(temp.slice(-3));
      temp = temp.slice(0, -3);
    }
    return parts.join(" ");
  };

  const handleCopy = () => {
    invoice && navigator.clipboard.writeText(invoice);

    toast({
      title: "Invoice copied to clipboard",
      description: shortStr(invoice),
    });
  };

  return (
    <div className="h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-[280px]">
        <div className="text-center mb-3">
          <div className="inline-block p-2 rounded-full bg-zinc-800 mb-1.5">
            <Download className="w-5 h-5" />
          </div>
          <h1 className="text-lg font-medium">Receive bitcoin</h1>
          <div className="text-xl font-mono mt-1">
            {formatSats(amount)} sats
          </div>
        </div>

        {step === "amount" ? (
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Description"
              value={memo}
              className="w-full h-10 bg-zinc-900 border border-zinc-800 rounded-lg px-3 text-sm"
              onChange={(e) => setMemo(e.target.value)}
            />
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
              onClick={() =>
                mutateAsync({ amount, memo }).then((invoice) => {
                  setInvoice(invoice.payment_request);
                  setStep("invoice");
                })
              }
              disabled={isPending}
              className="w-full h-10 rounded-lg bg-[#F89B2A] hover:bg-[#e88d1f] text-black font-medium text-sm"
            >
              {isPending ? "Creating invoice" : "Next"}
            </button>
            <button
              onClick={() => navigate("/home")}
              className="w-full h-10 rounded-lg bg-white hover:bg-gray-100 text-black font-medium text-sm"
            >
              <span className="flex gap-2 justify-center">
                <ArrowLeftIcon className="w-5 h-5" />
                Cancel
              </span>
            </button>
          </div>
        ) : (
          <div className="space-y-3 flex flex-col gap-2">
            <div className="bg-white p-3 rounded-lg">
              <QRCode value={invoice && invoice} className="w-full h-auto" />
            </div>
            <span className="w-full text-sm flex justify-between">
              <span className="text-gray-400">invoice</span>{" "}
              {invoice && shortStr(invoice)}
            </span>
            <button
              onClick={handleCopy}
              className="w-full h-10 rounded-lg bg-[#F89B2A] hover:bg-[#e88d1f] text-black font-medium text-sm"
            >
              <span className="flex gap-2 justify-center">
                <Copy className="w-5 h-5" />
                Copy invoice
              </span>
            </button>
            <button
              onClick={() => setStep("amount")}
              className="w-full h-10 rounded-lg bg-white hover:bg-gray-100 text-black font-medium text-sm"
            >
              <span className="flex gap-2 justify-center">
                <ArrowLeftIcon className="w-5 h-5" />
                Back
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
