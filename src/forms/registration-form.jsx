import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCreateWallet from "@/hooks/create-wallet";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name cannot be empty.")
      .max(50, "Name cannot exceed 50 characters.")
      .min(5, "Name cannot be less than 5 characters."),
  });

  const { mutateAsync, isPending } = useCreateWallet();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    mutateAsync(values.name).then(() => {
      navigate("/home");
    });
  };

  return (
    <Formik
      initialValues={{ name: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Field
              as={Input}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="my-2 group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
            />
            <ErrorMessage
              name="name"
              component="p"
              className="text-destructive text-sm mt-2 mb-2"
            />
            <Button
              type="submit"
              variant="secondary"
              className="my-2 transition-all md:w-auto w-full duration-300 rounded-xl shadow-lg hover:bg-[#f89b2adf] font-normal"
              disabled={isPending}
            >
              {isPending ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
