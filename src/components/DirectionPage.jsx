import React from "react";

const DirectionPage = () => {
  return (
    <>
      <div className=" w-full flex flex-wrap justify-center gap-7 xl:gap-14 px-5 xl:px-0 py-10">
        <div className="bg-[url('/direction-1.jpg')] rounded-xl w-[550px] h-[250px] bg-cover bg-center bg-no-repeat">
          <div className="bg-black w-full h-full bg-opacity-40 rounded-xl flex flex-col gap-2 justify-end items-start p-5">
            <h2 className="text-white font-medium text-xl">
              All-on-4 / Имплантация
            </h2>
            <p className=" text-gray-300 w-[80%] xl:w-[45%]">
              Полное восстановление зубов за 1 день
            </p>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-md">
              Узнать подробнее
            </button>
          </div>
        </div>

        <div className="bg-[url('/direction-2.jpg')] rounded-xl w-[550px] h-[250px] bg-cover bg-center bg-no-repeat">
          <div className="bg-black w-full h-full bg-opacity-40 rounded-xl flex flex-col gap-2 justify-end items-start p-5">
            <h2 className="text-white font-medium text-xl">Лечение зубов</h2>
            <p className=" text-gray-300 w-[80%] xl:w-[45%]">
              Терапия
            </p>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-md">
              Узнать подробнее
            </button>
          </div>
        </div>

        <div className="bg-[url('/direction-3.jpg')] rounded-xl w-[550px] h-[250px] bg-cover bg-center bg-no-repeat">
          <div className="bg-black w-full h-full bg-opacity-40 rounded-xl flex flex-col gap-2 justify-end items-start p-5">
            <h2 className="text-white font-medium text-xl">
              Выравнивание зубов
            </h2>
            <p className=" text-gray-300 w-[80%] xl:w-[45%]">
              Ортодонтия
            </p>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-md">
              Узнать подробнее
            </button>
          </div>
        </div>

        <div className="bg-[url('/direction-4.jpg')] rounded-xl w-[550px] h-[250px] bg-cover bg-center bg-no-repeat">
          <div className="bg-black w-full h-full bg-opacity-40 rounded-xl flex flex-col gap-2 justify-end items-start p-5">
            <h2 className="text-white font-medium text-xl">Эстетика/виниры</h2>
            <p className=" text-gray-300 w-[80%] xl:w-[45%]">Ортопедия</p>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-md">
              Узнать подробнее
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectionPage;
