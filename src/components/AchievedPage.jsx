import React from "react";

const data = [
  { img: "./done-1.png", title: "Лечение у специалистов с 20-летним опытом." },
  { img: "./done-2.png", title: "Лечение у специалистов с 20-летним опытом." },
  { img: "./done-3.png", title: "Лечение у специалистов с 20-летним опытом." },
];

const AchievedPage = () => {
  return (
    <div className="w-full py-10 flex flex-wrap justify-evenly items-center gap-10 xl:gap-0">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-gray-100 w-[340px] xl:w-[320px] h-[450px] relative rounded-xl flex flex-col gap-5 justify-start items-start p-5"
        >
          <h2 className="font-medium text-xl">{item.title}</h2>
          <p>
            500+ отзывов на независимых ресурсах, а также видео отзывы и отзывы
            с результатами у нас на сайте.
          </p>
          <img
            className="absolute right-14 xl:right-2 bottom-2"
            src={item.img}
            alt="Achievement icon"
          />
        </div>
      ))}
    </div>
  );
};

export default AchievedPage;
