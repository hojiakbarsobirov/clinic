import React from "react";

const AboutImg = () => {
  return (
    <>
      <div className=" w-full h-auto py-5">
        <div className="w-full flex justify-start xl:justify-center pl-7 items-center py-5">
          <h2 className="text-blue-500 text-2xl xl:text-4xl font-bold flex flex-col xl:flex-row gap-2">
            Премиальный уровень
            <h3 className="flex gap-2 xl:gap-2">
              комфорта
              <p className="text-black">на 350 м² </p>
            </h3>
          </h2>
        </div>

        <div className="w-full h-auto py-5 px-5 xl:px-8  flex flex-wrap gap-5 xl:gap-12 justify-center items-center">
          <img
            className="w-[150px] xl:w-[500px] h-[100px] xl:h-auto"
            src="./img-1.png"
            alt=""
          />
          <img
            className="w-[150px] xl:w-[250px] h-[100px] xl:h-auto"
            src="./img-2.png"
            alt=""
          />
          <img
            className="w-[150px] xl:w-[250px] h-[100px] xl:h-auto"
            src="./img-3.png"
            alt=""
          />
          <img
            className="w-[150px] xl:w-[250px] h-[100px] xl:h-auto"
            src="./img-4.png"
            alt=""
          />
          <img
            className="w-[150px] xl:w-[250px] h-[100px] xl:h-auto"
            src="./img-5.png"
            alt=""
          />
          <img
            className="w-[150px] xl:w-[500px] h-[100px] xl:h-auto"
            src="./img-6.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AboutImg;
