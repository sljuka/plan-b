import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function PasswordSetup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const isPasswordValid = password.length >= 10;
  const isConfirmValid = password === confirmPassword && isPasswordValid;

  return (
    <div className="min-h-screen p-4">
      <div className="flex justify-end mb-4">
        <Button
          variant="ghost"
          className="text-gray-400"
         /*  onClick={() => router.push("/ready")} */
        >
          Skip
        </Button>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-medium">
            Encrypt your wallet with a password
          </h1>
          <p className="text-gray-400">
            The password is used to encrypt the wallet on your hard drive,
            preventing unwanted access from others. A good password contains:
          </p>
          <ul className="text-gray-400 space-y-1 list-disc pl-5">
            <li>Ten or more random characters.</li>
            <li>Eight or more words.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Choose a password</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-900 border-gray-800 pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Confirm password</Label>
            <div className="relative">
              <Input
                type={showConfirm ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-gray-900 border-gray-800 pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="password-terms"
            checked={agreed}
            onCheckedChange={(checked) => setAgreed(checked)}
            className="mt-1"
          />
          <Label htmlFor="password-terms" className="text-sm text-gray-400">
            I wrote down this password, and understand that if I lose it, I
            might lose access to the bitcoin stored in this wallet.
          </Label>
        </div>

        <Button
          className="w-full"
          disabled={!isConfirmValid || !agreed}
          /* onClick={() => router.push("/ready")} */
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
