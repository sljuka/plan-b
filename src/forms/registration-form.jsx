import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name cannot be empty.")
      .max(50, "Name cannot exceed 50 characters.")
      .min(5, "Name cannot be less than 5 characters."),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log("Name:", values.name);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <Formik
      initialValues={{ name: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
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
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
            />
            <ErrorMessage
              name="name"
              component="p"
              className="text-destructive text-sm pt-2"
            />
            <Button
              type="submit"
              variant="secondary"
              className="mt-2 transition-all md:w-auto w-full duration-300 rounded-xl shadow-lg hover:bg-[#f89b2adf] font-normal"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
