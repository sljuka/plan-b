import * as Yup from "yup";
import { Upload, User } from "lucide-react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
import InvoiceSummary from "@/components/invoice-summary";
import { useNavigate } from "react-router-dom";

const SendForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name cannot be empty.")
      .min(5, "Name cannot be less than 5 characters."),
  });
  const [step, setStep] = useState("invoice");
  const [invoice, setInvoice] = useState();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setStep("summary");
    setInvoice(values.name);
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

        {step === "invoice" && (
          <section>
            <Formik
              initialValues={{ name: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="flex flex-col text-center">
                  <div className="pt-4 text-left">
                    <label htmlFor="name" className="text-sm font-medium">
                      Destination
                    </label>
                    <div className="relative">
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Address or Invoice"
                        className="w-full bg-transparent border-b border-zinc-800 rounded-none px-0 pb-2 focus:outline-none focus:border-zinc-600 placeholder:text-zinc-600"
                      />
                      <User className="w-5 h-5 text-zinc-600 absolute right-0 top-1/2 -translate-y-1/2" />
                    </div>
                    <ErrorMessage
                      name="name"
                      component="p"
                      className="text-destructive text-sm mt-2"
                    />
                  </div>

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

        {step === "summary" && <InvoiceSummary invoice={invoice} />}
      </div>
    </div>
  );
};

export default SendForm;
