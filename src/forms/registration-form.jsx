import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCreateWallet from "@/hooks/create-wallet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const { mutateAsync } = useCreateWallet();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar que el formulario recargue la página
    mutateAsync(name).then(() => {
      navigate("/home");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive my-3"
          aria-errormessage="error-email"
          onChange={(e) => setName(e.target.value)}
        />

        <Button
          type="submit"
          variant="secondary"
          className=" transition-all md:w-auto w-full duration-300 rounded-xl shadow-lg hover:bg-[#f89b2adf] font-normal"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
