import payInvoice from "@/hooks/pay-invoice";
import usePayLnurl from "@/hooks/pay-lnurl";
import { useState } from "react";

export const PayInvoice = () => {
  const [destination, setDestination] = useState("");
  const [amount, setAmount] = useState(0);
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
      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={() => {
          //todo if an lnurl, show a input to choose the amount to send
          if (destination.includes("@"))
            mutationLnurl.mutate({ lnurl: destination, amount });
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
