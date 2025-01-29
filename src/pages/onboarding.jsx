import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import RegistrationForm from "@/forms/registration-form";
import RestoreWallet from "@/components/restore-wallet";
import Terms from "@/components/wallet-creation/terms";
import WalletHandle from "@/components/wallet-creation/wallet-handle";

const Onboarding = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isRestore, setIsRestore] = useState(false);
  const [step, setStep] = useState("terms");

  const handleNext = () => {
    const steps = ["terms", "form", "wallet-created"];
    const currentStepIndex = steps.indexOf(step);
    const nextStep = steps[currentStepIndex + 1] || "terms";
    setStep(nextStep);
  };

  const handleCreateWallet = async () => {
    setIsDialogOpen(true);
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

      {!isRestore && (
        <Button
          className="bg-[#F89B2A] transition-all duration-300 py-4 sm:py-5 md:py-6 text-sm sm:text-lg md:text-[18px] rounded-xl shadow-lg hover:bg-[#f89b2adf] text-white font-normal px-12 sm:px-16 md:px-20"
          onClick={handleCreateWallet}
        >
          Create a new wallet
        </Button>
      )}

      <small
        className="text-[#F89B2A] text-[16px] sm:text-[18px] pt-4 sm:pt-5 cursor-pointer"
        onClick={() => setIsRestore(!isRestore)}
      >
        {isRestore ? "Cancel Restore" : "Restore an existing wallet"}
      </small>

      {isRestore && <RestoreWallet />}

      <p className="pt-8 sm:pt-10 md:pt-12 text-[18px] sm:text-[20px] text-center md:text-left">
        Your Keys, Your Coins
      </p>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[85%] md:max-w-[55%] lg:max-w-[45%] xl:max-w-[45%] mx-auto rounded-lg">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          {step === "terms" && <Terms onNext={handleNext} />}

          {step === "form" && <RegistrationForm onNext={handleNext} />}

          {step === "wallet-created" && <WalletHandle />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Onboarding;
