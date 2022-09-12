import Image, { StaticImageData } from "next/image";
import React from "react";
import NextLink from "next/link";

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
  textTwo,
}) => {
  return (
    <>
      <div className="grid items-end mt-10 md:mt-0 grid-cols-3">
        <h1 className="text-6xl lg:text-9xl text-accent">
          <span className="h-fit">{num}</span>
        </h1>
        <div className="col-span-2 grid justify-items-center">
          <Image src={imgSrc} alt="test" width="250" height="500" />
        </div>
      </div>
      <div className="mb-10 md:mb-0 lg:w-[90%] grid items-end lg:h-[50vh] self-end">
        <h2 className="text-4xl py-4 lg:py-0 lg:text-7xl">{heading}</h2>
        <p className="text-sm md:text-base pb-6 lg:pb-0 self-center max-w-4/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          dignissimos ex laborum aliquid ducimus doloremque alias earum
          inventore distinctio magnam! Fuga possimus, adipisci quibusdam
          obcaecati neque ullam hic natus ipsa omnis unde doloremque voluptatum
          nobis earum veniam ipsam a modi voluptatem laborum ut? Quam veniam ex
          tempore non? Ea, a.
          {textOne}
        </p>

        <NextLink className="link no-underline " href="/account">
          <button className="btn btn-primary w-1/3 lowercase btn-xs sm:btn-sm md:btn-md ">
            Get Started
          </button>
        </NextLink>
      </div>
    </>
  );
};
export default LPBodyItem;
