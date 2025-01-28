import useCurrentUser from "@/hooks/current-user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Protected = (children) => {
  const currentUser = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) navigate("/home");
  }, [navigate, currentUser]);

  return <>{children}</>;
};
