import React from "react";

export interface ILPEndProps {}

const LPEnd: React.FC<ILPEndProps> = ({}) => {
  return (
    <section className="grid justify-items-center pt-12 px-4 lg:px-20 lg:pt-32">
      <div className="grid max-w-screen-xl w-full">
        <div className="grid gap-8">
          <h1 className="text-4xl lg:text-8xl text-center lg:mb-12">
            get started now
          </h1>
          <ul className="steps hidden md:grid">
            <li className="step step-primary">
              <h2 className="lg:text-2xl py-4">Fly to moon</h2>
              <p className="px-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nihil reiciendis blanditiis veritatis autem! Dolorum
                harum reprehenderit rem laborum inventore autem, libero nostrum
                qui necessitatibus. Pariatur debitis deserunt eaque obcaecati.
              </p>
            </li>
            <li className="step step-primary">
              <h2 className="lg:text-2xl py-4">Fly to moon</h2>
              <p className="px-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nihil reiciendis blanditiis veritatis autem! Dolorum
                harum reprehenderit rem laborum inventore autem, libero nostrum
                qui necessitatibus. Pariatur debitis deserunt eaque obcaecati.
              </p>
            </li>
            <li className="step step-primary">
              <h2 className="lg:text-2xl py-4">Fly to moon</h2>
              <p className="px-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nihil reiciendis blanditiis veritatis autem! Dolorum
                harum reprehenderit rem laborum inventore autem, libero nostrum
                qui necessitatibus. Pariatur debitis deserunt eaque obcaecati.
              </p>
            </li>
            <li className="step step-primary">
              <h2 className="lg:text-2xl py-4">Fly to moon</h2>
              <p className="px-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nihil reiciendis blanditiis veritatis autem! Dolorum
                harum reprehenderit rem laborum inventore autem, libero nostrum
                qui necessitatibus. Pariatur debitis deserunt eaque obcaecati.
              </p>
            </li>
          </ul>

          <ul className="steps md:hidden">
            <li className="step step-info">
              <h2 className="lg:text-2xl py-4">Fly to moon</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nihil reiciendis blanditiis veritatis autem! Dolorum
                harum reprehenderit rem laborum inventore autem, libero nostrum
                qui necessitatibus. Pariatur debitis deserunt eaque obcaecati.
              </p>
            </li>
          </ul>
          <ul className="steps md:hidden">
            <li data-content="2" className="step step-info">
              <h2 className="lg:text-2xl py-4">Fly to moon</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nihil reiciendis blanditiis veritatis autem! Dolorum
                harum reprehenderit rem laborum inventore autem, libero nostrum
                qui necessitatibus. Pariatur debitis deserunt eaque obcaecati.
              </p>
            </li>
          </ul>
          <ul className="steps md:hidden">
            <li data-content="3" className="step step-info">
              <h2 className="lg:text-2xl py-4">Fly to moon</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nihil reiciendis blanditiis veritatis autem! Dolorum
                harum reprehenderit rem laborum inventore autem, libero nostrum
                qui necessitatibus. Pariatur debitis deserunt eaque obcaecati.
              </p>
            </li>
          </ul>
          <ul className="steps md:hidden">
            <li data-content="4" className="step step-info">
              <h2 className="lg:text-2xl py-4">Fly to moon</h2>
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
