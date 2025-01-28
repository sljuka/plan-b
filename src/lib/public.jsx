import useCurrentUser from "@/hooks/current-user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Public = ({ children }) => {
  const navigate = useNavigate();

  const currentUser = useCurrentUser();

  useEffect(() => {
    if (currentUser) {
      return navigate("/home");
    }
  }, [navigate, currentUser]);

  return children;
};
