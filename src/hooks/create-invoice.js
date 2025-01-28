import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useCurrentUser from "./current-user";

const useCreateInvoice = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { invoiceKey } = useCurrentUser();

  return useMutation({
    mutationFn: async (amount, description = "", expiry = 3600) => {
      const payload = {
        "out": false,
        "amount": amount,
        "unit": "sat",
        "memo": description,
        "expiry": expiry,
      };

      const response = await axios.post(`${BASE_URL}${"/api/v1/payments"}`,
        payload,
        {
          headers: {
            "X-Api-Key": invoiceKey,
            "Content-Type": "application/json",
          },
        });

      return response.data;
    },
  });
};

export default useCreateInvoice;