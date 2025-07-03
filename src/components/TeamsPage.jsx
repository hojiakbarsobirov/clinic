import React from "react";

const TeamsPage = () => {
  const item = [
    {
      img: "./teams-1.png",
      name: "Попов Константин Юрьевич",
      addition: "Челюстно-лицевой хирург, стоматолог-хирург",
      experience: "Стаж: 10 лет",
    },
    {
      img: "./teams-2.png",
      name: "Дремалов Борис Михайлович",
      addition: "Хирург-ортопед высшей категории",
      experience: "Стаж: 15 лет, кандидат медицинских наук",
    },
    {
      img: "./teams-3.png",
      name: "Гаджиев Юсуп Исламович",
      addition: "Хирург-ортопед высшей категории",
      experience: "Стаж: 15 лет, кандидат медицинских наук",
    },
  ];

  return (
    <>
      <div className=" w-full h-auto py-5 px-5 xl:px-0">
        <div className="flex flex-col my-5 justify-center items-center gap-5">
          <h3 className="font-bold text-4xl">Ami Команда</h3>
          <p className="text-center text-lg">
            Познакомьтесь с теми, кто вложит высокий стандарт Ami Clinic
            <p className="text-blue-500">в вашу новую улыбку</p>
          </p>
          <div className="flex flex-wrap xl:flex-row w-full gap-5 justify-center items-center">
            <button className="w-[150px] bg-blue-400 text-white transition ease-in-out focus:text-white py-1 rounded-full  focus:bg-blue-500 font-medium">
              Хирурги
            </button>
            <button className="w-[150px] transition ease-in-out focus:text-white py-1 rounded-full bg-gray-100 focus:bg-blue-500 font-medium">
              Ортопеды
            </button>
            <button className="w-[150px] transition ease-in-out focus:text-white py-1 rounded-full bg-gray-100 focus:bg-blue-500 font-medium">
              Техники
            </button>
            <button className="w-[150px] transition ease-in-out focus:text-white py-1 rounded-full bg-gray-100 focus:bg-blue-500 font-medium">
              Терапевты
            </button>
            <button className="w-[150px] transition ease-in-out focus:text-white py-1 rounded-full bg-gray-100 focus:bg-blue-500 font-medium">
              Ассистенты
            </button>
            <button className="w-[150px] transition ease-in-out focus:text-white py-1 rounded-full bg-gray-100 focus:bg-blue-500 font-medium">
              Кураторы
            </button>
          </div>
        </div>

        <div className=" w-full h-auto py-5 px-2 flex flex-col-reverse xl:flex-row justify-center gap-12 items-center">
          {item?.map((item, index) => (
            <div
              key={index}
              className="shadow-md rounded-xl w-full xl:w-[330px] pb-5 flex flex-col justify-around items-center"
            >
              <img className="mb-4" src={item.img} alt="" />
              <div className="w-[80%] flex flex-col gap-3">
                <h2 className="font-bold">{item.name}</h2>
                <p className="w-[70%]">{item.addition}</p>
                <p className="font-medium">{item.experience}</p>
                <button className="w-full px-5 py-2 bg-blue-500 text-white font-medium rounded-md">
                  Записаться на приём
                </button>
                <p className="text-center text-gray-600">Подробнее о враче</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamsPage;
