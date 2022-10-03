import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a client
const client = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <ToastContainer />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
