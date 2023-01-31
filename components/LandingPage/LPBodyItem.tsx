import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "../Button";

export interface ILPBodyItemProps {
  num: string;
  imgSrc: string | StaticImageData;
  heading: string;
  textOne: string;
  textTwo?: string;
}

const LPBodyItem: React.FC<ILPBodyItemProps> = ({
  heading,
  imgSrc,
  num,
  textOne,
}) => {
  return (
    <>
      <div className="mt-10 grid grid-cols-3 items-end md:mt-0">
        <h2 className="text-6xl text-accent lg:text-9xl">
          <span className="h-fit">{num}</span>
        </h2>
        <div className="col-span-2 grid justify-items-center">
          <Image src={imgSrc} alt="test" width="250" height="500" />
        </div>
      </div>
      <div className="mb-10 grid items-end self-end md:mb-0 lg:h-[50vh] lg:w-[90%]">
        <h3 className="py-4 text-3xl font-medium lg:py-0 lg:text-5xl">
          {heading}
        </h3>
        <p className="max-w-4/5 self-center pb-6 text-sm md:text-base lg:pb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          dignissimos ex laborum aliquid ducimus doloremque alias earum
          inventore distinctio magnam! Fuga possimus, adipisci quibusdam
          obcaecati neque ullam hic natus ipsa omnis unde doloremque voluptatum
          nobis earum veniam ipsam a modi voluptatem laborum ut? Quam veniam ex
          tempore non? Ea, a.
          {textOne}
        </p>

        <div className="max-w-sm">
          <Button direction="left-0" inset="inset-y-0">
            Start now
          </Button>
        </div>
      </div>
    </>
  );
};
export default LPBodyItem;
