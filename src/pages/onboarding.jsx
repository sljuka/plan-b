import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Onboarding = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white px-4 sm:px-6">
      <img
        className="w-32 sm:w-40 md:w-auto"
        src="/planb-logo.png"
        alt="Workflow logo"
      />
      <p className="text-[#CCCCCC] text-[16px] sm:text-[18px] md:text-[20px] py-4 md:py-6">
        Send & Receive Bitcoin
      </p>
      <p className="pb-8 sm:pb-10 md:pb-14 text-center md:text-left">
        A simple Bitcoin Wallet for your enjoyment
      </p>

      <Button
        className="bg-[#F89B2A] transition-all duration-300 py-4 sm:py-5 md:py-6 text-sm sm:text-lg md:text-[18px] rounded-xl shadow-lg hover:bg-[#f89b2adf] text-white font-normal px-12 sm:px-16 md:px-20"
        onClick={openDialog}
      >
        Create a new wallet
      </Button>

      <small className="text-[#F89B2A] text-[16px] sm:text-[18px] pt-4 sm:pt-5">
        Restore an existing wallet
      </small>

      <p className="pt-8 sm:pt-10 md:pt-12 text-[18px] sm:text-[20px] text-center md:text-left">
        Your wallet, Your coins
      </p>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
            </div>
            <Button type="submit" size="sm" className="px-3">
              <span className="sr-only">Copy</span>
              <Copy />
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Onboarding;
