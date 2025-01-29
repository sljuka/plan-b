/* eslint-disable react/prop-types */
import { useState } from "react";
import useDecodeInvoice from "@/hooks/decode-invoice";
import usePayInvoice from "@/hooks/pay-invoice";
import { User, ArrowUpDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";
import { toSats } from "@/utils/sats";

const InvoiceSummary = ({ invoice }) => {
  const { mutateAsync } = usePayInvoice();
  const { data } = useDecodeInvoice(invoice);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleSendInvoice = async () => {
    await mutateAsync(invoice);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    navigate("/home"); // Redirect to /home when dialog is closed
  };

  return (
    <div className="bg-black text-white">
      <div className="w-full max-w-md px-4 mx-auto pt-4">
        <div className="absolute top-6 left-4">
          <Button
          variant="ghost"
            onClick={() => navigate(-1)} // Go back to the previous page
            className="bg-transparent text-[#F89B2A] border-none"
          >
            &lt; Back
          </Button>
        </div>
        <div className="space-y-6">
          <div className="border-b border-zinc-800 pb-4">
            <div className="text-sm text-zinc-400">Amount</div>
            <div className="flex justify-between items-center mt-1">
              <div className="text-xl">{toSats(data?.amount_msat)} sats</div>
              <div className="flex items-center text-zinc-400">
                {/* $1.98 */}
                <ArrowUpDown className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>

          <div className="border-b border-zinc-800 pb-4">
            <div className="text-sm text-zinc-400">To</div>
            <div className="flex justify-between items-center mt-1">
              <div className="text-zinc-300 text-ellipsis overflow-hidden">
                {invoice.length > 14
                  ? `${invoice.substring(0, 14)}...${invoice.substring(
                      invoice.length - 14
                    )}`
                  : invoice}
              </div>
              <User className="w-5 h-5 text-zinc-600 ml-2 flex-shrink-0" />
            </div>
          </div>

          <div className="border-b border-zinc-800 pb-4">
            <div className="text-sm text-zinc-400">Date</div>
            <div className="text-zinc-300 mt-1">{new Date(data?.date * 1000).toLocaleString()}</div>
          </div>

          <div className="border-b border-zinc-800 pb-4">
            <div className="text-sm text-zinc-400">Description</div>
            <div className="text-zinc-300 mt-1">{data?.description}</div>
          </div>
        </div>

        <Button
          onClick={handleSendInvoice}
          variant="secondary"
          className="mt-6 transition-all w-full duration-300 rounded-xl shadow-lg hover:bg-[#f89b2adf] font-normal"
        >
          Send
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Sent</DialogTitle>
          </DialogHeader>
          <p>Your payment was successful!</p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InvoiceSummary;
