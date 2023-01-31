import React from "react";
import { ILPEndProps } from "../../types/LPinterface";

const LPEnd: React.FC<ILPEndProps> = () => {
  return (
    <section className="grid justify-items-center px-4 pt-12 lg:px-20 lg:pt-32">
      <div className="grid w-full max-w-screen-xl">
        <div className="grid gap-8">
          <h1 className="text-center text-4xl lg:mb-12 lg:text-8xl">
            get started now
          </h1>
          <ul className="steps hidden md:grid">
            <li className="step-primary step">
              <h2 className="py-4 lg:text-2xl">Create a free account</h2>
              <p className="px-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nihil reiciendis blanditiis veritatis autem! Dolorum
                harum reprehenderit rem laborum inventore autem, libero nostrum
                qui necessitatibus. Pariatur debitis deserunt eaque obcaecati.
              </p>
            </li>
            <li className="step-primary step">
              <h2 className="py-4 lg:text-2xl">Connect your information</h2>
              <p className="px-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nihil reiciendis blanditiis veritatis autem! Dolorum
                harum reprehenderit rem laborum inventore autem, libero nostrum
                qui necessitatibus. Pariatur debitis deserunt eaque obcaecati.
              </p>
            </li>
            <li className="step-primary step">
              <h2 className="py-4 lg:text-2xl">Start saving</h2>
              <p className="px-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nihil reiciendis blanditiis veritatis autem! Dolorum
                harum reprehenderit rem laborum inventore autem, libero nostrum
                qui necessitatibus. Pariatur debitis deserunt eaque obcaecati.
              </p>
            </li>
            <li className="step-primary step">
              <h2 className="py-4 lg:text-2xl">Profit???</h2>
              <p className="px-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nihil reiciendis blanditiis veritatis autem! Dolorum
                harum reprehenderit rem laborum inventore autem, libero nostrum
                qui necessitatibus. Pariatur debitis deserunt eaque obcaecati.
              </p>
            </li>
          </ul>

          <ul className="steps md:hidden">
            <li className="step-info step">
              <h2 className="py-4 lg:text-2xl">Fly to moon</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nihil reiciendis blanditiis veritatis autem! Dolorum
                harum reprehenderit rem laborum inventore autem, libero nostrum
                qui necessitatibus. Pariatur debitis deserunt eaque obcaecati.
              </p>
            </li>
          </ul>
          <ul className="steps md:hidden">
            <li data-content="2" className="step-info step">
              <h2 className="py-4 lg:text-2xl">Fly to moon</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nihil reiciendis blanditiis veritatis autem! Dolorum
                harum reprehenderit rem laborum inventore autem, libero nostrum
                qui necessitatibus. Pariatur debitis deserunt eaque obcaecati.
              </p>
            </li>
          </ul>
          <ul className="steps md:hidden">
            <li data-content="3" className="step-info step">
              <h2 className="py-4 lg:text-2xl">Fly to moon</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nihil reiciendis blanditiis veritatis autem! Dolorum
                harum reprehenderit rem laborum inventore autem, libero nostrum
                qui necessitatibus. Pariatur debitis deserunt eaque obcaecati.
              </p>
            </li>
          </ul>
          <ul className="steps md:hidden">
            <li data-content="4" className="step-info step">
              <h2 className="py-4 lg:text-2xl">Fly to moon</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nihil reiciendis blanditiis veritatis autem! Dolorum
                harum reprehenderit rem laborum inventore autem, libero nostrum
                qui necessitatibus. Pariatur debitis deserunt eaque obcaecati.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default LPEnd;
