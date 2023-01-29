"use client";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import ReactQueryProvider from "@/utils/ReactQueryProvider";
import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <title>yaba.</title>
        <meta name="description" content="yet another budget app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
