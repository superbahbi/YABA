"use client";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import ReactQueryProvider from "@/utils/ReactQueryProvider";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

type Props = {
  children: React.ReactNode;
  session: Session;
};
export default function RootLayout({ children, session }: Props) {
  return (
    <html lang="en">
      <head>
        <title>yaba.</title>
        <meta name="description" content="yet another budget app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <SessionProvider session={session}>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
