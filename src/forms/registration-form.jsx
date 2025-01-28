import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar que el formulario recargue la página
    console.log("Name:", name); // Mostrar el nombre en la consola
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
