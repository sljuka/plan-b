import payInvoice from "@/hooks/pay-invoice";
import usePayLnurl from "@/hooks/pay-lnurl";
import { useState } from "react";

export const PayInvoice = () => {
  const [destination, setDestination] = useState("");
  const mutationInvoice = payInvoice();
  const mutationLnurl = usePayLnurl();

  if (mutationInvoice.error)
    return <div>Error {mutationInvoice.error?.response?.data?.detail}</div>;

  if (mutationInvoice.loading) return <div>Loading</div>;

  return (
    <div className="pt-4 flex gap-4 flex-col">
      <h2>Invoice: </h2>
      <input
        type="text"
        placeholder="invoice"
        onChange={(e) => setDestination(e.target.value)}
      />
      <button
        onClick={() => {
          if (destination.includes("@")) mutationLnurl.mutate(destination);
          else mutationInvoice.mutate(destination);
        }}
      >
        Pay
      </button>
      <span>
        Payment Hash:{" "}
        {mutationInvoice.data?.checking_id ?? mutationLnurl.data?.checking_id}
      </span>
    </div>
  );
};
