import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useCreateWallet = () => {
  const ADMIN_KEY = import.meta.env.VITE_ADMIN_KEY
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  return useMutation({
    mutationFn: async (name = "Plan B hackathon") => {
      const payload = {
        "name": name
      }

      const response = await axios.post(`${BASE_URL}${"/api/v1/wallet"}`,
        payload,
        {
          headers: {
            "X-Api-Key": ADMIN_KEY,
            "Content-Type": "application/json",
          },
        });

      //todo save the wallet id, inkey and adminkey in local storage

      return response.data;
    },
  });
};

export default useCreateWallet;