import { useState } from "react";
import { Button } from "./ui/button";  // Import Button component
import { useRestoreWallet } from "@/hooks/restore-wallet";  // Custom hook for restoring wallet
import { useNavigate } from "react-router-dom";  // For routing

const RestoreWallet = () => {
  const [walletId, setWalletId] = useState("");  // Wallet ID state
  const [loading, setLoading] = useState(false);  // Loading state to manage button state
  const navigate = useNavigate();  // Navigation hook

  const { mutateAsync } = useRestoreWallet();  // Calling restore wallet API

  const handleRestoreWallet = async () => {
    if (!walletId) {  // Alert if no wallet ID is provided
      alert("Please enter a valid wallet ID");
      return;
    }
  };

  return (
    <div className="bg-black flex flex-col justify-center items-center text-white px-4 sm:px-6">
      {/* Back button */}
      <div className="absolute top-6 left-4">
        <Button
          onClick={() => navigate(-1)}  // Go back to the previous page
          className="bg-transparent text-[#F89B2A] border-none"
        >
          &lt; Back
        </Button>
      </div>

      {/* Title and description */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#F89B2A] py-2">Import Wallet</h2>
      <p className="text-sm sm:text-lg text-[#CCCCCC] pb-3 text-center">
        Copy and paste your wallet ID.
      </p>

      {/* Wallet ID Input */}
      <div className="flex flex-col items-center mb-4">
        <input
          type="text"
          placeholder="Paste wallet ID here..."
          value={walletId}
          onChange={(e) => setWalletId(e.target.value)}
          className="bg-gray-800 text-white p-3 rounded-md w-full sm:w-80 mb-3"
        />
        <Button
          className="bg-[#F89B2A] text-white font-normal px-8 sm:px-10 py-3 rounded-lg"
          onClick={handleRestoreWallet}
          disabled={loading}  // Disable button while loading
        >
          {loading ? "Restoring..." : "Import Wallet"}
        </Button>
      </div>
    </div>
  );
};

export default RestoreWallet;
