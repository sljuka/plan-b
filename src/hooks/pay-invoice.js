import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useCurrentUser from "./current-user";

const usePayInvoice = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const currentUser = useCurrentUser();

  return useMutation({

    mutationFn: async (invoice) => {
      const playload = {
        out: true,
        bolt11: invoice,
      }

      const response = await axios.post(`${BASE_URL}${"/api/v1/payments"}`,
        playload,
        {
          headers: {
            "X-Api-Key": currentUser.adminKey,
            "Content-Type": "application/json",
          },
        });

      return response.data;
    },
  });
};

export default usePayInvoice;
