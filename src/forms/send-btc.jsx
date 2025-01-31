import * as Yup from "yup";
import { Upload, User } from "lucide-react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
import InvoiceSummary from "@/components/invoice-summary";
import { useNavigate } from "react-router-dom";
import LnAddressSummary from "@/components/lnaddress-summary";

const SendForm = () => {
  const validationSchema = Yup.object({
    address: Yup.string()
      .required("Address cannot be empty.")
      .min(5, "Address cannot be less than 5 characters."),
    amount: Yup.number().when("isLightning", {
      is: true, // Only apply validation for Lightning address
      then: Yup.number().required("Amount is required for Lightning payments."),
    }),
  });

  const [step, setStep] = useState("input");
  const [destination, setDestination] = useState();
  const [amount, setAmount] = useState();
  const [isInvoice, setIsInvoice] = useState(true);
  const navigate = useNavigate();

  // Function to handle address change and detect if it's a Lightning address or LNURL
  const handleAddressChange = (event) => {
    const value = event.target.value;
    if (value.includes("@")) {
      setIsInvoice(false); // It's an LNURL address
    } else {
      setIsInvoice(true); // It's a Lightning address
    }
  };

  const handleSubmit = (values) => {
    setStep("summary");
    setDestination(values.address);
    setAmount(values.amount);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="w-full max-w-md px-4 mx-auto pt-4">
        <div className="flex justify-center mt-8">
          <div className="rounded-full bg-zinc-700 p-4">
            <Upload className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute top-6 left-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)} // Go back to the previous page
            className="bg-transparent text-[#F89B2A] border-none"
          >
            &lt; Back
          </Button>
        </div>

        <h1 className="text-xl font-medium text-center mt-6">Send bitcoin</h1>

        {step === "input" && (
          <section>
            <Formik
              initialValues={{ address: "", amount: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ handleChange }) => (
                <Form className="flex flex-col text-center">
                  <div className="pt-4 text-left">
                    <label htmlFor="address" className="text-sm font-medium">
                      Destination
                    </label>
                    <div className="relative">
                      <Field
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Address or Invoice"
                        className="w-full bg-transparent border-b border-zinc-800 rounded-none px-0 pb-2 focus:outline-none focus:border-zinc-600 placeholder:text-zinc-600"
                        onChange={(e) => {
                          handleChange(e);
                          handleAddressChange(e);
                        }}
                      />
                      <User className="w-5 h-5 text-zinc-600 absolute right-0 top-1/2 -translate-y-1/2" />
                    </div>
                    <ErrorMessage
                      name="address"
                      component="p"
                      className="text-destructive text-sm mt-2"
                    />
                  </div>

                  {!isInvoice && (
                    <div className="pt-4 text-left">
                      <label htmlFor="amount" className="text-sm font-medium">
                        Amount (Sats)
                      </label>
                      <Field
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder="Enter amount in sats"
                        className="w-full bg-transparent border-b border-zinc-800 rounded-none px-0 pb-2 focus:outline-none focus:border-zinc-600 placeholder:text-zinc-600"
                      />
                      <ErrorMessage
                        name="amount"
                        component="p"
                        className="text-destructive text-sm mt-2"
                      />
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="secondary"
                    className="mt-6 transition-all w-full duration-300 rounded-xl shadow-lg hover:bg-[#f89b2adf] font-normal"
                  >
                    Next
                  </Button>
                </Form>
              )}
            </Formik>
          </section>
        )}

        {step === "summary" && isInvoice && (
          <InvoiceSummary invoice={destination} />
        )}

        {step === "summary" && !isInvoice && (
          <LnAddressSummary address={destination} amount={amount} />
        )}
      </div>
    </div>
  );
};

export default SendForm;
