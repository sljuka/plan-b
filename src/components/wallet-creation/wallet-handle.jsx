import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export default function WalletHandle() {
  const [agreed, setAgreed] = useState(false);
  const data = JSON.parse(localStorage.getItem("userData"))?.walletId;
  const walletId = data;
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col items-center">
      <div className="w-full max-w-xl space-y-3 ">
        <div className="flex justify-center">
          <div className="rounded-full bg-[#F89B2A] p-4">
            <Check className="w-6 h-6 text-white" />
          </div>
        </div>
        <h1 className="text-xl font-bold text-center mt-4 md:text-2xl">
          Wallet Created!
        </h1>
        <p className="text-gray-400 text-center text-sm md:text-lg">
          You successfully created your Plan B Wallet.
          <br />
          Save these information
        </p>

        <div className="space-y-6 w-full text-center">
          <div className="flex flex-col justify-between items-center w-full">
            <div className="text-sm md:text-lg">
              Wallet ID:{" "}
              <span
                className="font-bold cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(walletId);
                  alert("Wallet ID copied: " + walletId);
                }}
              >
                {walletId}
              </span>
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

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Button
              variant="secondary"
              className="transition-all w-full md:w-1/2 duration-300 rounded-xl shadow-lg hover:bg-[#f89b2adf] font-normal"
              disabled={!agreed}
              onClick={() => navigate("/backup")}
            >
              Backup
            </Button>
            <Button
              variant=""
              className="transition-all w-full md:w-1/2 duration-300 rounded-xl shadow-lg hover:bg-[#f89b2adf] font-normal"
              onClick={() => navigate("/home")}
            >
              Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
