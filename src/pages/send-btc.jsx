import React, { useState } from "react";
import SendForm from "@/forms/send-btc";

const SendBtc = () => {
  const [address, setAddress] = useState("");
  const [isLnurl, setIsLnurl] = useState(false);

  // Function to handle address change
  const handleAddressChange = (event) => {
    const value = event.target.value;
    setAddress(value);
    if (value.includes("@")) {
      setIsLnurl(true); // Identifying LNURL address
    } else {
      setIsLnurl(false); // Lightning address
    }
  };

  return (
    <div>
      <SendForm
        address={address}
        onAddressChange={handleAddressChange}
        isLnurl={isLnurl}
      />
    </div>
  );
};

export default SendBtc;
