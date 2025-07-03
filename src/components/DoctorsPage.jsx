import React from "react";

const DoctorsPage = () => {
  return (
    <>
      <div className=" w-full h-auto py-5 px-0 xl:px-32">
        <h2 className="text-black text-xl xl:text-4xl flex flex-col xl:flex-row gap-0 xl:gap-2 font-bold text-center xl:text-start">
          Даже в тех случаях, где{" "}
          <p className="text-blue-500">другие клиники бессильны</p>
        </h2>
        <p className="text-md xl:text-xl my-3 text-center xl:text-start">
          Реальные истории пациентов
        </p>

        <div className="w-full px-5 xl:px-0 py-5 flex flex-wrap justify-center xl:justify-start gap-5">
          <button className="px-4 py-1 transition ease-in-out font-medium bg-blue-500 text-white rounded-full">
            Все
          </button>
          <button className="px-4 py-1 transition ease-in-out focus:bg-blue-500 focus:text-white font-medium bg-gray-200 rounded-full">
            All-on-4
          </button>
          <button className="px-4 py-1 transition ease-in-out focus:bg-blue-500 focus:text-white font-medium bg-gray-200 rounded-full">
            Лечение зубов
          </button>
          <button className="px-4 py-1 transition ease-in-out focus:bg-blue-500 focus:text-white font-medium bg-gray-200 rounded-full">
            Ортодонтия
          </button>
          <button className="px-4 py-1 transition ease-in-out focus:bg-blue-500 focus:text-white font-medium bg-gray-200 rounded-full">
            Ортопедия
          </button>
        </div>

        <div className="w-full py-5 flex flex-col gap-6 xl:gap-10 xl:flex-row justify-start items-center">
          <div className="w-[330px] xl:w-[350px] h-[450px] rounded-xl">
            <img className="w-full h-full" src="./doctors-1.png" alt="" />
          </div>
          
          <div className="w-[330px] xl:w-[700px] h-auto py-5 rounded-xl p-2 xl:p-7 gap-8 xl:gap-4 bg-gray-100 flex flex-col justify-around items-start">
            <h3 className="font-bold text-xl">Лечение переодонтида</h3>
            <div className="space-y-1">
                <h4 className="font-medium">Лечение переодонтида</h4>
                <p>Гаджиев Юсуп Исламович, Гаджиев Юсуп Исламович, Гаджиев Юсуп Исламович</p>
            </div>

            <div className="space-y-1">
                <h4 className="font-medium">C чем обратились</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div className="space-y-1">
                <h4 className="font-medium">Что сделали</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div className="w-full flex items-center gap-7">
                <div className="space-y-2">
                    <h4 className="font-medium">Стоимость</h4>
                    <p>250 000 руб.</p>
                </div>

                <div className="space-y-2">
                    <h4 className="font-medium">Сроки</h4>
                    <p>1 день</p>
                </div>
            </div>

          </div>
          
        </div>
      </div>
    </>
  );
};

export default DoctorsPage;
