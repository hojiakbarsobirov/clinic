import React from "react";

const CreatorClinic = () => {
  return (
    <>
      <div className=" w-full h-auto px-5 py-5 flex flex-col-reverse xl:flex-row justify-center gap-10 items-center">
        <div className=" w-full xl:w-[45%] h-auto py-5">
          <div className="flex flex-col xl:flex-row items-center my-5 gap-2 px-0 xl:px-5 font-bold text-3xl xl:text-4xl">
            <h2>Ami Clinic</h2>
            <div className="flex items-center gap-2">
              <h2>создана</h2>
              <h2 className="text-blue-500">c любовью</h2>
            </div>
          </div>

          <div className="w-full xl:w-[85%] my-5 px-5">
            <p>
              В 2016 году я привез технологию All-on-4 в Россию, сделав ставку
              на инновацию. Мне говорили: “Ничего не получится!” “Технология не
              подходит для российских реалий” Но у меня была вера и твердое
              убеждение: All-on-4 — это шанс получить новые зубы. Как свои,
              только еще лучше.
            </p>
            <p>
              Я понимаю, насколько сейчас трудно выбрать стоматологию. На рынке
              сотни предложений “Зубы за 1 день”. Но мы видим огромное
              количество ошибок — когда присылают слепки, снимки, непроверенные
              окклюзии. Ведь еще 5 лет назад 9 из 10 врачей отрицали саму
              возможность такой операции.
            </p>
          </div>

          <div className="w-full px-5 my-5 flex flex-wrap gap-5 xl:gap-0 justify-between items-center">
            <div className="w-[150px]">
              <h3 className="font-bold text-xl">с 2016г</h3>
              <p>Работаем по технологии All-on-4</p>
            </div>

            <div className="w-[150px]">
              <h3 className="font-bold text-xl">35 000+</h3>
              <p>Установленных имплантов</p>
            </div>

            <div className="w-[150px]">
              <h3 className="font-bold text-xl">6000+</h3>
              <p>Восстановленно челюстей</p>
            </div>
          </div>
        </div>

        <div className=" w-full xl:w-[40%] h-[80%] flex justify-center items-center">
          <img className="w-full xl:w-[90%]" src="./image-2.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default CreatorClinic;
