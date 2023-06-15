"use client";
import { useRouter } from "next/navigation";
import { IconArrowLeft } from "@/assets/icons";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen bg-base-100">
        <div className="mx-auto px-4 pt-20 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="hidden lg:block lg:max-w-lg lg:pr-5">
              <div className="lg:max-w-xl">
                <div>
                  <p className="mb-2 inline-block rounded-full text-xs font-semibold tracking-wider">
                    new and improved
                  </p>
                </div>
                <h2 className="mb-6 max-w-lg text-3xl font-bold leading-snug tracking-tight sm:text-5xl sm:leading-snug">
                  budget platform for your{" "}
                  <span className="my-1 inline-block border-b-8 border-accent font-light text-accent">
                    financial needs
                  </span>
                </h2>
                <p className="text-base">
                  yaba is a budgeting platform that helps you to track your
                  income and expenses, set goals and save money. It is a simple
                  to use platform that helps you to manage your finances.
                </p>
              </div>
            </div>
            <div className="relative text-accent lg:ml-32 lg:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-base-100 p-2 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                />
              </svg>
              <div className="-mx-4 flex flex-col px-4 py-6 text-center sm:px-12 sm:text-left lg:bg-base-100 lg:py-10 lg:shadow-2xl lg:shadow-blue-900/20">
                <button
                  className="btn-ghost btn-circle btn"
                  onClick={() => router.back()}
                >
                  <IconArrowLeft strokeColor="text-secondary" />
                </button>

                <div className="p-4">{children} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
