import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import useCreateWallet from "@/hooks/create-wallet";
// import useRestoreWallet from "@/hooks/useRestoreWallet";
import RegistrationForm from "@/forms/registration-form";

const Onboarding = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const [isRestore, setIsRestore] = useState(false);

  // Use the custom hooks
  const {
    createWallet,
    walletId: createdWalletId,
    error: createError,
    loading: createLoading,
  } = useCreateWallet();
  const {
    restoreWallet,
    walletId: restoredWalletId,
    error: restoreError,
    loading: restoreLoading,
  } = useRestoreWallet();

  const openDialog = () => setIsDialogOpen(true);

  const handleCreateWallet = async () => {
    await createWallet();
  };

  const handleRestoreWallet = async () => {
    if (!userId) {
      alert("Please enter a valid user ID");
      return;
    }
    await restoreWallet(userId);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white px-4 sm:px-6">
      <img
        className="w-32 sm:w-40 md:w-auto"
        src="/planb-logo.png"
        alt="Plan B Wallet Logo"
      />
      <p className="text-[#CCCCCC] text-[16px] sm:text-[18px] md:text-[20px] py-4 md:py-6">
        Send & Receive Bitcoin
      </p>
      <p className="pb-8 sm:pb-10 md:pb-14 text-center md:text-left">
        A simple Bitcoin Wallet for your enjoyment
      </p>

      {/* Conditionally Render "Create Wallet" Button */}
      {!isRestore && (
        <Button
          className="bg-[#F89B2A] transition-all duration-300 py-4 sm:py-5 md:py-6 text-sm sm:text-lg md:text-[18px] rounded-xl shadow-lg hover:bg-[#f89b2adf] text-white font-normal px-12 sm:px-16 md:px-20"
          onClick={handleCreateWallet}
          disabled={createLoading}
        >
          {createLoading ? "Creating..." : "Create a new wallet"}
        </Button>
      )}

      {/* Restore Wallet Button and Wallet ID Input */}
      <small
        className="text-[#F89B2A] text-[16px] sm:text-[18px] pt-4 sm:pt-5 cursor-pointer"
        onClick={() => setIsRestore(!isRestore)}
      >
        {isRestore ? "Cancel Restore" : "Restore an existing wallet"}
      </small>

      {/* Show input field for restoring wallet if isRestore is true */}
      {isRestore && (
        <>
          <input
            type="text"
            placeholder="Enter Wallet ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="mt-4 p-2 rounded-md text-black"
          />
          <Button
            className="bg-[#F89B2A] transition-all duration-300 py-4 sm:py-5 md:py-6 text-sm sm:text-lg md:text-[18px] rounded-xl shadow-lg hover:bg-[#f89b2adf] text-white font-normal px-12 sm:px-16 md:px-20 mt-4"
            onClick={handleRestoreWallet}
            disabled={restoreLoading}
          >
            {restoreLoading ? "Restoring..." : "Restore Wallet"}
          </Button>
        </>
      )}

      <p className="pt-8 sm:pt-10 md:pt-12 text-[18px] sm:text-[20px] text-center md:text-left">
        Your Keys, Your Coins
      </p>

      {/* Display errors if any */}
      {(createError || restoreError) && (
        <div className="text-red-500 mt-4">{createError || restoreError}</div>
      )}

      {/* Dialog for Sharing Wallet ID */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[75%] md:max-w-[55%] lg:max-w-[45%] xl:max-w-[30%] mx-auto rounded-lg">
          <DialogHeader>
            <DialogTitle>Create wallet</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <input
              id="link"
              defaultValue={`Your wallet ID is: ${
                createdWalletId || restoredWalletId
              }`}
              readOnly
              className="p-2 rounded-md text-black"
            />
          </div>
          <RegistrationForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Onboarding;
