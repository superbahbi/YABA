import React from "react";

interface AuthProps {}

const Auth: React.FC<AuthProps> = ({}) => {
  return (
    <>
      <div className="grid grid-rows-6 grid-cols-4 min-h-screen">
        <div
          className="col-start-1 col-end-3 row-span-full"
          data-theme="night"
        ></div>
        <div
          className="col-start-3 col-end-5 row-span-full bg-slate-200"
          data-theme="night"
        ></div>
        <main className="grid grid-rows-6 grid-cols-4 col-start-1 col-end-5 row-span-full h-[65%] w-[50%] place-self-center lg:w-[800px] rounded-3xl opacity-95 bg-slate-50">
          <div className="z-10 col-start-1 col-end-3 row-start-1 row-end-7">
            <h1 className="text-2xl text-primary p-4 font-bold">yaba.</h1>
            <div className="z-10 col-start-1 col-end-3 row-start-1 row-end-7 grid items-center p-12">
              <div className="carousel z-10 w-full">
                <div id="item1" className="carousel-item w-full">
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://placeimg.com/400/225/arch"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                  </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://placeimg.com/400/225/arch"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                  </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://placeimg.com/400/225/arch"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full py-2 pt-6 gap-4">
                <a href="#item1" className="btn h-2 w-[75px] min-h-0"></a>
                <a href="#item2" className="btn h-2 w-[75px] min-h-0"></a>
                <a href="#item3" className="btn h-2 w-[75px] min-h-0"></a>
              </div>
            </div>
          </div>
          <div className="col-start-3 col-end-5 row-span-full md:col-start-3 md:col-end-5"></div>
        </main>
      </div>
    </>
  );
};
export default Auth;
