import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useCurrentUser from "./current-user";

const useDecodeInvoice = (string) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { invoiceKey } = useCurrentUser();


  return useQuery({
    queryKey: ["decodeInvoice", string],
    queryFn: async () => {
      const payload = {
        "data": string,
        "filter_fields": []
      }
      const response = await axios.post(`${BASE_URL}${"/api/v1/payments/decode"}`,
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

export default useDecodeInvoice;
