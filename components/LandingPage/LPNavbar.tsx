import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ILPNavbarProps } from "../../types/LPinterface";

const LPNavbar: React.FC<ILPNavbarProps> = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="navbar sticky top-0 z-10 bg-base-100 bg-none px-8">
      <div className="navbar-start">
        <NextLink href="/">
          <div className="pl-2">
            <Image src={Logo} alt="logo" width={40} height={40} />
          </div>
        </NextLink>
      </div>

      <div className="navbar-end">
        <NextLink href="/explore">
          <button className="btn-ghost btn hidden md:block">
            <span className="lowercase">explore</span>
          </button>
        </NextLink>
        <button className="dropdown-end dropdown">
          <label tabIndex={1} className="btn-ghost btn">
            <span className="lowercase">account</span>
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <NextLink href={"/auth/login"}>
                <span className="justify-between">login</span>
              </NextLink>
            </li>

            <li>
              <NextLink href={"/auth/register"}>
                <span>register</span>
              </NextLink>
            </li>
          </ul>
        </button>
        <div data-hide-on-theme="dark">
          <button className="btn-ghost btn" onClick={() => setTheme("dark")}>
            🌙
          </button>
        </div>

        {/* When the theme is light, hide this div */}
        <div data-hide-on-theme="light">
          <button className="btn-ghost btn" onClick={() => setTheme("light")}>
            🌞
          </button>
        </div>
      </div>
    </div>
  );
};
export default LPNavbar;
