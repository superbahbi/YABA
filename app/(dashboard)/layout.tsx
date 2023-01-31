"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex w-full flex-col justify-center bg-base-100">
        <div className="w-screen md:mx-auto md:max-w-screen-xl">
          <Header />
          <div className="flex flex-row">
            <Navbar />
            <div className="md:ml-12 lg:ml-56">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
