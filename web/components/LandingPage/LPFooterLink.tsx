import React from "react";

import { ILPFooterLinkProps } from "../../types/LPinterface";

const LPFooterLink: React.FC<ILPFooterLinkProps> = ({
  link,
  title,
  underline,
}) => {
  return (
    <>
      {underline ? (
        <a
          className={
            "inline-block underline transition hover:text-secondary-content/75"
          }
          href={link}
        >
          {title}
        </a>
      ) : (
        <li>
          <a
            className={
              "inline-block transition hover:text-secondary-content/75"
            }
            href={link}
          >
            {title}
          </a>
        </li>
      )}
    </>
  );
};

export default LPFooterLink;
