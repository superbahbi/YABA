import React from "react";
import { ILPToastProps } from "../../types/LPinterface";

const LPToast: React.FC<ILPToastProps> = ({ justifySelfEnd, textContent }) => {
  return justifySelfEnd ? (
    <div className="alert alert-success w-1/2 md:w-2/5 justify-self-end bg-apple-green">
      <div>
        <p>{textContent}</p>
      </div>
    </div>
  ) : (
    <div className="alert alert-success w-1/2 md:w-2/5 bg-apple-blue">
      <div>
        <p>{textContent}</p>
      </div>
    </div>
  );
};
export default LPToast;
