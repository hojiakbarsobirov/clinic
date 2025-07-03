import React from "react";

const CostOfTreatment = () => {
  return (
    <>
      <div className=" w-full h-auto py-5 px-5">
        <div className="w-full flex justify-center items-center">
          <h2 className="text-xl font-medium text-center py-10 w-[70%] xl:w-full">
            Рассчитайте стоимость лечения своих зубов
          </h2>
        </div>

        <div className=" w-full h-auto py-5 flex flex-wrap justify-center items-center gap-10">
          <div className="shadow-md p-10 w-[400px] px-6 py-8 rounded-xl flex flex-col justify-center items-start gap-6">
            <div className="flex items-center gap-4">
              <img src="./image-1.png" alt="" />
              <div>
                <h2 className="font-bold text-lg xl:text-xl">Маргарита</h2>
                <p>Куратор лечения</p>
              </div>
            </div>
            <p>
              После прохождения сориентирует по стоимости и ответит на все
              вопросы.
            </p>

            <h3 className="font-bold text-lg">
              Ответьте на 5 вопросов и получите:
            </h3>

            <div className="flex items-start gap-4">
              <img src="./priz-icons.png" alt="" />
              <p>Бесплатную консультацию от стоматолога-кандидата наук</p>
            </div>

            <div className="flex items-start gap-4">
              <img src="./priz-icons.png" alt="" />
              <p>3 варианта стоимости</p>
            </div>

            <div className="flex items-start gap-4">
              <img src="./priz-icons.png" alt="" />
              <p>3 варианта стоимости</p>
            </div>
          </div>

          <div className="shadow-md w-[400px] xl:w-[700px] py-5 rounded-xl flex flex-col justify-center items-center gap-3">
            <h3 className="font-medium text-lg xl:text-xl">
              Сколько зубов нуждаются в лечении?
            </h3>
            <div className="flex flex-wrap gap-10 justify-center items-center w-full py-5">
              <button className="w-[140px] focus:border-blue-400 focus:bg-blue-200 focus:text-blue-500 focus:font-medium transition ease-in-out xl:w-[213px] py-3 border border-gray-400 rounded-md">
                1
              </button>
              <button className="w-[140px] focus:border-blue-400 focus:bg-blue-200 focus:text-blue-500 focus:font-medium transition ease-in-out xl:w-[213px] py-3 border border-gray-400 rounded-md">
                2
              </button>
              <button className="w-[140px] focus:border-blue-400 focus:bg-blue-200 focus:text-blue-500 focus:font-medium transition ease-in-out xl:w-[213px] py-3 border border-gray-400 rounded-md">
                3
              </button>
              <button className="w-[140px] focus:border-blue-400 focus:bg-blue-200 focus:text-blue-500 focus:font-medium transition ease-in-out xl:w-[213px] py-3 border border-gray-400 rounded-md">
                4 и более
              </button>
            </div>
            <button className="px-10 focus:border-blue-400 focus:bg-blue-200 focus:text-blue-500 focus:font-medium transition ease-in-out sm:w-[320px] xl:w-[460px] py-3 border border-gray-400 rounded-md">
              Точно не знаю
            </button>

            <div className="w-full py-5 flex justify-between xl:justify-evenly px-10 items-center">
              <div>
                <p className="font-medium text-gray-500">3 из 5</p>
                <img src="./statistics.png" alt="" />
              </div>

              <div className="flex items-center gap-2">
                <button className="border py-2 px-4 font-medium rounded-md">
                  Назад
                </button>
                <button className="bg-blue-400 text-white font-medium py-2 px-4 rounded-md">
                  Далее
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CostOfTreatment;
