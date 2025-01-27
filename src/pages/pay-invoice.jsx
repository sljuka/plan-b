import payInvoice from "@/hooks/pay-invoice"
import { useState } from "react"

/**
 * payment response
 * checking_id : "0d424b7f1608cb020a6e58e1db4d88d10a83219899ad041e20ec2a01fcc5f53c"
 * payment_hash : "0d424b7f1608cb020a6e58e1db4d88d10a83219899ad041e20ec2a01fcc5f53c"
 */
export const PayInvoice = () => {
    const [invoice, setInvoice] = useState("");
    const { data: payinvoice, loading, error, mutate} = payInvoice()

    if (error) return <div>Error {error?.response?.data?.detail}</div>

    if (loading) return <div>Loading</div>

    return (
        <div className='pt-4 flex gap-4 flex-col'>
            <h2>Invoice: </h2>
            <input 
              type="text"
              placeholder="invoice"
              onChange={(e) => setInvoice(e.target.value)}
            />
            <button onClick={() => mutate(invoice)}>Pay</button>
            <span>Payment Hash: { payinvoice?.checking_id }</span>
        </div>
    )
}