import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col justify-center w-full bg-base-100">
        <div className="md:max-w-screen-xl w-screen md:mx-auto">
          <Header />
          <div className="flex flex-row">
            <Navbar />
            <div className="lg:ml-56 md:ml-12">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
