import { Button } from "@/components/ui/button";
import useCreateInvoice from "@/hooks/create-invoice";
import { useState } from "react";
import QRCode from "./qr-code";

export const Invoice = () => {
  const [amount, setAmount] = useState(0);
  const [memo, setMemo] = useState("");
  const mutationInvoice = useCreateInvoice();

  return (
    <>
      <h1>Create Invoice</h1>
      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Memo"
        onChange={(e) => setMemo(e.target.value)}
      />
      <div>
        {mutationInvoice.isPending ? (
          "Creating invoice..."
        ) : (
          <>
            {mutationInvoice.isError ? (
              <div>An error occurred: {mutationInvoice.error.message}</div>
            ) : null}

            {mutationInvoice.isSuccess ? (
              <>
                <div>Invoice: {mutationInvoice.data?.payment_request}</div>
                <QRCode
                  size="200px"
                  string={mutationInvoice.data?.payment_request}
                />
              </>
            ) : null}

            <Button
              onClick={() => {
                mutationInvoice.mutate({ amount, memo });
              }}
            >
              Create Invoice
            </Button>
            <span></span>
          </>
        )}
      </div>
    </>
  );
};
