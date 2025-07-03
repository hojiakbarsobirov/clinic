import React from "react";

const DoctorsPage2 = () => {
  return (
    <>
      <div className="w-full h-auto py-5 flex justify-center items-center">
        <div className="bg-gray-100 w-[90%] xl:w-[80%] h-auto py-5 rounded-2xl flex flex-col-reverse xl:flex-row justify-center items-center">

          <div className=" w-full xl:w-[50%] h-auto py-5 flex flex-col justify-center items-start pl-7 pr-5 gap-3">
            <h2 className="flex-col xl:flex gap-2 text-black font-bold text-xl xl:text-2xl"><h3 className="flex xl:flex-row gap-2"><p className="text-blue-500">Один визит</p> приблизит</h3> вас к решению проблемы.</h2>
            <h3 className="font-medium ">Запишитесь на комплексный приём чтобы узнать:</h3>
            <p><b className="text-blue-500">•</b> Возможно ли восстановить зубы за 1 день в вашем случае </p>
            <p><b className="text-blue-500">•</b> Какие импланты и метод имплантации подойдут вам 100%</p>
            <p><b className="text-blue-500">•</b> Стоимость имплантации "под ключ" + план лечения</p>
            <div className="w-full flex flex-col xl:flex-row items-center gap-3">
                <input className="px-5 py-3 w-[290px] xl:w-[230px] rounded-lg border border-gray-300" type="text" placeholder="Введите номер телефона" />
                <button className="px-5 py-3 rounded-lg w-[290px] xl:w-[140px] bg-blue-500 font-medium text-white">Записаться</button>
            </div>

            <div className="w-full flex flex-col xl:flex-row justify-center items-start">
                <div className="flex items-center">
                    <img src="/priz-icons2.png" alt="" />
                    <p>Первый приём абсолютно бесплатный</p>
                </div>

                <div className="flex items-center">
                    <img src="/priz-icons2.png" alt="" />
                    <p>КТ обеих челюстейв подарок</p>
                </div>
            </div>

          </div>
          
          <div className=" w-full xl:w-[50%] h-auto py-5 flex justify-center items-center">
            <img className="w-[full] xl:w-[80%]" src="/doctor-img2.png" alt="" />
          </div>

        </div>
      </div>
    </>
  );
};

export default DoctorsPage2;
