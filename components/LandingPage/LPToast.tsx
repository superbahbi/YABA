import React from "react";
import { ILPToastProps } from "../../types/LPinterface";

const LPToast: React.FC<ILPToastProps> = ({ justifySelfEnd, textContent }) => {
  return justifySelfEnd ? (
    <div className="bg-apple-green alert alert-success w-1/2 justify-self-end md:w-2/5">
      <div>
        <p>{textContent}</p>
      </div>
    </div>
  ) : (
    <div className="bg-apple-blue alert alert-success w-1/2 md:w-2/5">
      <div>
        <p>{textContent}</p>
      </div>
    </div>
  );
};
export default LPToast;
