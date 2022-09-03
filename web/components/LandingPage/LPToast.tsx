import * as React from "react";

export interface ILPToastProps {
  justifySelfEnd?: boolean;
  textContent: string;
}

export default function LPToast(props: ILPToastProps) {
  // TODO: Change textContent to child ?
  const { justifySelfEnd, textContent } = props;
  return justifySelfEnd ? (
    <div className="alert alert-success w-1/2 md:w-2/5 justify-self-end bg-apple-green">
      <div>
        <p>{textContent}</p>
      </div>
    </div>
  ) : (
    <div className="alert alert-success w-1/2 md:w-2/5 bg-primary">
      <div>
        <p>{textContent}</p>
      </div>
    </div>
  );
}
