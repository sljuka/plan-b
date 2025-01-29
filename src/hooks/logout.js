import { useMutation } from "@tanstack/react-query";

const useLogout = () => {

  return useMutation({
    mutationFn: async () => {
      return localStorage.removeItem('userData');
    },
  });
};

export default useLogout;
