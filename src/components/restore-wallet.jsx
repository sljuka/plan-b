import { useState } from "react";
import { Button } from "./ui/button";
import { useRestoreWallet } from "@/hooks/restore-wallet";
import { useNavigate } from "react-router-dom";

/* import useCreateWallet from "@/hooks/create-wallet";
 */
const RestoreWallet = () => {
  const [walletId, setWalletId] = useState("");
  const navigate = useNavigate();

  const { mutateAsync } = useRestoreWallet();
  const handleRestoreWallet = async () => {
    if (!walletId) {
      alert("Please enter a valid user ID");
      return;
    }
    mutateAsync(walletId).then(() => {
      navigate("/home");
    });
  };
  return (
    <div>
      <div className="grid flex-1 gap-2">
        {/* <Label htmlFor="link" className="sr-only">
          Link
        </Label>
        <input
          id="link"
            defaultValue={`Your wallet ID is: ${
                createdWalletId || restoredWalletId
              }`}
          readOnly
          className="p-2 rounded-md text-black"
        /> */}
        {/*  <p className="text-sm sm:text-lg text-gray-600">
          Your wallet ID is 798123749873498
        </p> */}
      </div>
      <div className="flex flex-col ">
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
          /*             disabled={restoreLoading}
           */
        >
          {/* {restoreLoading ? "Restoring..." : "Restore Wallet"} */}
          Restore wallet
        </Button>
      </div>
      {/*   Display errors if any
      {(createError || restoreError) && (
        <div className="text-red-500 mt-4">{createError || restoreError}</div>
      )} */}
    </div>
  );
};

export default RestoreWallet;
