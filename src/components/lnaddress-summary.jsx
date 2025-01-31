/* eslint-disable react/prop-types */
import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";
import usePayLnurl from "@/hooks/pay-lnurl";

const LnAddressSummary = ({ address, amount }) => {
  const { mutateAsync, error, isPending } = usePayLnurl();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleSendLnurl = async () => {
    mutateAsync({ lnurl: address, amount })
      .then(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });

        setDialogOpen(true);
      })
      .catch((e) => {
        console.error(e);
      });
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
              <div className="text-xl">{amount} sats</div>
              <div className="flex items-center text-zinc-400">
                <ArrowUpDown className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>

          <div className="border-b border-zinc-800 pb-4">
            <div className="text-sm text-zinc-400">Date</div>
            <div className="text-zinc-300 mt-1">
              {new Date().toLocaleString()}
            </div>
          </div>

          <div className="border-b border-zinc-800 pb-4">
            <div className="text-sm text-zinc-400">Description</div>
            <div className="text-zinc-300 mt-1">
              Payment to {address.split("@")[0]}
            </div>
          </div>
        </div>

        <Button
          onClick={handleSendLnurl}
          variant="secondary"
          className="mt-6 transition-all w-full duration-300 rounded-xl shadow-lg hover:bg-[#f89b2adf] font-normal"
          disabled={isPending}
        >
          {isPending ? "Sending..." : "Send"}
        </Button>
        {error && (
          <span name="name" className="text-red-500 text-sm mt-2">
            {error?.response?.data?.detail}
          </span>
        )}
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

export default LnAddressSummary;
