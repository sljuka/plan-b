import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCreateWallet from "@/hooks/create-wallet";
import { Wallet } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

const RegistrationForm = ({ onNext }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name cannot be empty.")
      .max(50, "Name cannot exceed 50 characters.")
      .min(5, "Name cannot be less than 5 characters."),
  });

  const { mutateAsync, isPending } = useCreateWallet();
  /*   const navigate = useNavigate();
   */
  const handleSubmit = (values) => {
    mutateAsync(values.name).then(() => {
      /* navigate("/home"); */
      onNext();
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-xl rounded-lg shadow-lg">
        <Formik
          initialValues={{ name: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="flex flex-col text-center">
              <div className="flex justify-center">
                <div className="rounded-full bg-[#7a7a7ab9] p-4">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
              </div>

              <h1 className="text-2xl font-bold mt-6">
                Create a Lightning Network wallet
              </h1>
              <p className="text-gray-400 pt-2">
                We will use your name to identify your LN wallet and your
                digital assets.
              </p>

              <div className="pt-4 text-left">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Field
                  as={Input}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-2"
                />
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
                disabled={isPending}
              >
                {isPending ? "Submitting..." : "Submit"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;

RegistrationForm.propTypes = {
  onNext: PropTypes.func.isRequired,
};
