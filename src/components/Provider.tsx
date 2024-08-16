"use client";

import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./ErrorPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <QueryClientProvider client={new QueryClient()}>
        <Toaster position="bottom-right" />
        {children}
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
export default Provider;
