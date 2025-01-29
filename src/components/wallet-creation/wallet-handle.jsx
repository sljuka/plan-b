import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function WalletHandle() {
  const [agreed, setAgreed] = useState(false);
  const walletId = "754aca395076d471be24e7146a6825d";

  return (
    <div className=" flex flex-col items-center">
      <div className="w-full max-w-xl space-y-3 ">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="rounded-full bg-[#F89B2A] p-4">
            <Check className="w-6 h-6 text-white" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center mt-6">Wallet Created!</h1>
        <p className="text-gray-400 text-center">
          You successfully created your Plan B Wallet
        </p>

        <div className="space-y-6 w-full text-center">
          <div className="flex items-center w-full text-center space-x-2">
            <div className="text-gray-400">Wallet ID:</div>
            <div className="font-mono p-4 rounded-lg break-words text-center">
              {walletId}
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked)}
              className="mt-1"
            />
            <Label htmlFor="terms" className="text-sm text-gray-400">
              I wrote down this ID, and understand that if I lose it, I might
              lose access to the bitcoin stored in this wallet.
            </Label>
          </div>

          <Button
            variant="secondary"
            className="mt-6 transition-all w-full duration-300 rounded-xl shadow-lg hover:bg-[#f89b2adf] font-normal"
            disabled={!agreed} /* onClick={() => router.push("/password")} */
          >
            Backup
          </Button>
        </div>
      </div>
    </div>
  );
}
