import React from "react";
import Main from "../layouts/Main";
import { OverviewProps } from "../types/interface";

const Overview: React.FC<OverviewProps> = ({}) => {
  return (
    <>
      <Main>
        <p>The quick brown fox...</p>
      </Main>
    </>
  );
};
export default Overview;
