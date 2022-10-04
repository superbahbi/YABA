import React from "react";
import { ILPFooterProps } from "../../types/LPinterface";
import LPFooterLink from "./LPFooterLink";
import Image from "next/image";
import Button from "../Button";
import Image from "next/image";
import yabaLogo from "/assets/images/logo.png"

const LPFooter: React.FC<ILPFooterProps> = () => {
  return (
    <section className="flex justify-center pt-8">
      <footer className="text-neutral-content bg-neutral w-full">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2">
            <div className="py-16 border-b border-neutral-content lg:border-b-0 lg:border-l lg:order-last lg:py-24 lg:pl-12">
              <div className="flex justify-center lg:hidden">
                <Image src={yabaLogo} width={40} height={40} alt="Yaba logo"/>
              </div>

              <div className="mt-12 space-y-4 lg:mt-0">
                <span className="bg-accent-focus rounded lg:h-1 lg:w-10 lg:block"></span>

                <div className="text-center lg:text-left">
                  <h2 className="text-2xl font-medium ">
                    Subscribe to our newsletter!
                  </h2>

                  <p className="max-w-md mx-auto mt-4 text-sm leading-relaxed lg:mx-0">
                    Enter your email to stay up to date with any of our
                    promotions, news about, or blog posts!
                  </p>
                </div>

                <form
                  action="https://bfginteractive.us10.list-manage.com/subscribe/post"
                  method="POST"
                  className="mt-6"
                >
                  <input
                    type="hidden"
                    name="u"
                    value="80aba07a99b3202fcbaa8eb66"
                  />
                  <input type="hidden" name="id" value="47a1d2ea8d" />
                  <div className="relative max-w-lg mx-auto lg:mx-0">
                    <label className="sr-only" htmlFor="email-footer">
                      Email
                    </label>

                    <input
                      className="w-full py-4 pl-3 pr-16 text-sm text-primary bg-white border-none rounded-md"
                      required
                      type="email"
                      placeholder="Enter your email"
                      autoCapitalize="off"
                      autoCorrect="off"
                      name="MERGE0"
                      id="MERGE0"
                    />
                    <div className="absolute text-white pt-4">
                      <Button type="submit">Subscribe</Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="pt-16 pb-8 lg:pt-24 lg:pr-12">
              <div className="hidden lg:flex">
                <Image src={yabaLogo} width={40} height={40} alt="Company logo"/>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:mt-12">
                <div className="text-center lg:text-left">
                  <p className="text-lg font-medium ">About Us</p>

                  <nav className="mt-4">
                    <ul className="space-y-1.5 text-sm">
                      <LPFooterLink link="/#about" title="About Yaba" />
                      <LPFooterLink link="/coming-soon" title="Clients" />
                      <LPFooterLink link="/coming-soon" title="Testimonials" />
                      <LPFooterLink link="#contact" title="Contact" />
                    </ul>
                  </nav>
                </div>

                <div className="text-center lg:text-left">
                  <p className="text-lg font-medium ">Offers</p>

                  <nav className="mt-4">
                    <ul className="space-y-1.5 text-sm">
                      <LPFooterLink
                        link="/auth/register"
                        title="Credit cards"
                      />
                      <LPFooterLink link="/auth/register" title="Investments" />
                      <LPFooterLink
                        link="/auth/register"
                        title="Credit score check"
                      />
                      <LPFooterLink link="/auth/register" title="Loans" />
                    </ul>
                  </nav>
                </div>

                <div className="text-center lg:text-left">
                  <p className="text-lg font-medium ">Helpful Links</p>

                  <nav className="mt-4">
                    <ul className="space-y-1.5 text-sm">
                      <LPFooterLink link="/auth/register" title="FAQ" />
                      <LPFooterLink link="/auth/register" title="Blog" />
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="pt-8 mt-16 text-sm  border-t border-neutral-content lg:mt-24">
                <p className="text-center lg:text-left">
                  <LPFooterLink
                    underline
                    link="/coming-soon"
                    title="Privacy Policy"
                  />{" "}
                  &nbsp;
                  <LPFooterLink
                    underline
                    link="/coming-soon"
                    title="Terms & Conditions"
                  />{" "}
                  &nbsp;
                  {/* <LPFooterLink link="/" title="Cookies" underline /> */}
                </p>

                <p className="mt-4 text-center lg:text-left">
                  Copyright &copy; 2022 yaba
                </p>
                {/* <p></p> */}
                <div className="flex justify-center mt-6 gap-4 lg:justify-start">
                  <a
                    className=" transition hover:/75"
                    href="https://www.facebook.com/BFG-Interactive-Media-107876375414422"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> Facebook </span>

                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  <a
                    className=" transition hover:/75"
                    href="https://www.instagram.com/bfginteractive/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> Instagram </span>

                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  <a
                    className=" transition hover:/75"
                    href="https://twitter.com/home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> Twitter </span>

                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
export default LPFooter;
