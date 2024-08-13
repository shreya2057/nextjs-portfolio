"use client";

import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./ErrorPage";

function Provider({ children }: { children: React.ReactNode }) {
  return <ErrorBoundary fallback={<ErrorPage />}>{children}</ErrorBoundary>;
}
export default Provider;
