import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Terms({ onNext }) {
  const [termsChecked, setTermsChecked] = useState({
    first: false,
    second: false,
  });

  const handleToggle = (key) => {
    setTermsChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allChecked = termsChecked.first && termsChecked.second;

  return (
    <div className=" flex flex-col items-center">
      <div className="w-full max-w-xl space-y-3">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="rounded-full bg-[#F89B2A] p-4">
            <Check className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mt-6">
          Two things you must understand
        </h1>

        {/* Toggle Items */}
        <div className="space-y-6 mt-8">
          <div className="flex items-center justify-between">
            <p className="text-gray-400 pt-2">
              With bitcoin, you are your own bank. No one else has access to
              your ID.
            </p>
            <Switch
              checked={termsChecked.first}
              onCheckedChange={() => handleToggle("first")}
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-gray-400 pt-1">
              If you lose access to this app, and the backup we will help you
              create, your bitcoin cannot be recovered.
            </p>
            <Switch
              checked={termsChecked.second}
              onCheckedChange={() => handleToggle("second")}
            />
          </div>
        </div>

        {/* Next Button */}
        <Button
          variant="secondary"
          className="mt-6 transition-all w-full duration-300 rounded-xl shadow-lg hover:bg-[#f89b2adf] font-norma"
          onClick={onNext}
          disabled={!allChecked}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
Terms.propTypes = {
  onNext: PropTypes.func.isRequired,
};
