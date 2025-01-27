import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // @ts-ignore err: unknown -> err: AxiosError
      retry: (failureCount, err) => {
        console.log("SSSS", err);
        if (err.response?.status === 401) {
          return false; // do not retry, trigger error
        }

        // otherwise, restore default
        const defaultRetry = new QueryClient().getDefaultOptions().queries
          ?.retry;

        return Number.isSafeInteger(defaultRetry)
          ? failureCount < (defaultRetry ?? 0)
          : false;
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
  </StrictMode>
);
