import React from "react";

const HeaderPage = () => {
  return (
    <>
      <div className="bg-gray-100 w-full h-screen xl:h-[86vh] flex justify-center items-center">
        <div className=" bg-[url('/background-img.png')] relative left-0 xl:left-20 w-full xl:w-[70%] h-[50%] xl:h-[100%] bg-cover bg-center bg-no-repeat">
          <div className=" w-full h-full flex justify-between items-center relative">
            <div className="relative right-0 xl:right-44 bottom-36 xl:top-0 gap-3 w-full h-full flex flex-col xl:flex-col justify-between xl:justify-center">
              <div className="flex flex-col justify-center xl:justify-start items-center xl:items-start">
                <h2 className="text-2xl xl:text-4xl text-center xl:text-start text-gray-700 font-medium">
                  Cтоматология
                </h2>
                <h2 className="text-5xl xl:text-7xl font-medium text-center xl:text-start text-blue-500">
                  AMICLINIC
                </h2>
                <p className="text-center xl:text-start w-[70%]">
                  Заботливая стоматология, которую вы полюбите!
                </p>
              </div>

              <div className="flex flex-col relative top-16 xl:top-0 xl:flex-row justify-center xl:justify-start  items-center gap-5">
                <button className="bg-blue-500 w-[320px] xl:w-[280px] text-white font-medium py-3 px-5 rounded-lg">
                  Запись на первый приём
                </button>
                <button className="bg-green-500 w-[320px] xl:w-[280px] text-white font-medium py-3 px-5 rounded-lg">
                  Узнать стоимость WhatsApp
                </button>
              </div>
            </div>

            <div>
              <img
                className="w-[300px] xl:w-[600px] absolute xl:bottom-5 xl:right-5 bottom-2 right-9"
                src="./icons.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
