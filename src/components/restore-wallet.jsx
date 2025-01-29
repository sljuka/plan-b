import { useState } from "react";
import { Button } from "./ui/button";
import { useRestoreWallet } from "@/hooks/restore-wallet";
import { useNavigate } from "react-router-dom";

const RestoreWallet = () => {
  const [walletId, setWalletId] = useState("");
  const navigate = useNavigate();

  const { mutateAsync } = useRestoreWallet();

  const handleRestoreWallet = async () => {
    if (!walletId) {
      alert("Please enter a valid wallet ID");
      return;
    }
    mutateAsync(walletId)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        alert(error.message);  // Display the error message if any
      });
  };

  return (
    <div className="bg-black flex flex-col justify-center items-center text-white px-4 sm:px-6">
      {/* Back button */}
      <div className="absolute top-6 left-4">
        <Button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="bg-transparent text-[#F89B2A] border-none"
        >
          &lt; Back
        </Button>
      </div>

      <div className="flex flex-col items-center mt-8">
        {/* Wallet ID Input */}
        <input
          type="text"
          placeholder="Enter Wallet ID"
          value={walletId}
          onChange={(e) => setWalletId(e.target.value)}
          className="mt-4 p-2 rounded-md text-black"
        />
        <Button
          className="bg-[#F89B2A] transition-all duration-300 py-4 sm:py-5 md:py-6 text-sm sm:text-lg md:text-[18px] rounded-xl shadow-lg hover:bg-[#f89b2adf] text-white font-normal px-12 sm:px-16 md:px-20 mt-4"
          onClick={handleRestoreWallet}
        >
          Restore wallet
        </Button>
      </div>
    </div>
  );
};

export default RestoreWallet;
