/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "./ui/button";
import { useRestoreWallet } from "@/hooks/restore-wallet";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";

const RestoreWallet = ({ setIsRestore }) => {
  const [walletId, setWalletId] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  const { mutateAsync } = useRestoreWallet();

  const handleRestoreWallet = async () => {
    if (!walletId) {
      toast({
        title: "Error while restoring",
        description: "Please enter a valid wallet ID",
      });
      return;
    }
    mutateAsync(walletId)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        toast({
          title: "Error while restoring",
          description: error.message,
        });
      });
  };

  return (
    <div className="bg-black flex flex-col text-white">
      {/* Back button */}
      <div className="absolute top-6 left-4">
        <Button
          variant="ghost"
          onClick={() => setIsRestore(false)}
          className="bg-transparent text-[#F89B2A] border-none"
        >
          &lt; Back
        </Button>
      </div>

      <div className="pt-2">
        {/* Wallet ID Input */}
        <Input
          type="text"
          placeholder="Enter Wallet ID"
          value={walletId}
          onChange={(e) => setWalletId(e.target.value)}
        />
        <Button
          className="bg-[#F89B2A] transition-all duration-300 py-4 sm:py-5 md:py-6 text-sm sm:text-lg md:text-[18px] rounded-xl shadow-lg hover:bg-[#f89b2adf] text-white font-normal px-12 sm:px-16 md:px-20 mt-4"
          onClick={handleRestoreWallet}
        >
          Restore Wallet
        </Button>
      </div>
    </div>
  );
};

export default RestoreWallet;
