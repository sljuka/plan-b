import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useCurrentUser from "./current-user";

const useCreateInvoice = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const currentUser = useCurrentUser();

  return useMutation({
    mutationFn: async ({ amount, memo }) => {
      const payload = {
        out: false,
        amount: amount,
        unit: "sat",
        memo: memo ? memo : ""
      };

      if (!currentUser) return null;

      const response = await axios.post(
        `${BASE_URL}${"/api/v1/payments"}`,
        payload,
        {
          headers: {
            "X-Api-Key": currentUser.invoiceKey,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    },
  });
};

export default useCreateInvoice;
