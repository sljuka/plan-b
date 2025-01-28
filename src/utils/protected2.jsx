import useCurrentUser from "@/hooks/current-user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Protected = (children) => {
  const navigate = useNavigate();

  const currentUser = useCurrentUser();

  useEffect(() => {
    if (!currentUser) {
      return navigate("/");
    }
  }, [navigate, currentUser]);

  return children;
};
