import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const usePayInvoice = () => {
  const API_KEY = import.meta.env.VITE_ADMIN_KEY;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  return useMutation({

    mutationFn: async (invoice) => {
      const playload = {
        out: true,
        bolt11: invoice,
      }

      console.log("qqq, ", playload)

      const response = await axios.post(`${BASE_URL}${"/api/v1/payments"}`, playload, {
        headers: {
          "X-Api-Key": API_KEY,
          "Content-Type": "application/json",
        },
      });

      return response.data;
    },
  });
};

export default usePayInvoice;
