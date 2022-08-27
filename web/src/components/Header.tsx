import React from "react";
import { HeaderProps } from "../types/interface";
import { ReactComponent as IconMail } from "../assets/icons/mail.svg";
import { ReactComponent as IconNotification } from "../assets/icons/notification.svg";

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <>
      <div className="flex flex-row justify-end">
        <div className="flex flex-row ">
          <div className="flex justify-center items-center p-2">
            <IconMail />
          </div>
          <div className="flex justify-center items-center p-2">
            <IconNotification />
          </div>
          <div className="flex justify-center items-center p-2 mr-2">
            <div className="bg-blue h-6 w-6 rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
