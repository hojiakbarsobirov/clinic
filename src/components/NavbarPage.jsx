import React, { useState } from "react";

const NavbarPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md w-full px-5 xl:px-10 py-6 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-5">
          <img
            className="w-28 xl:w-36 border-r-2 border-gray-300 pr-4"
            src="./navLogo.png"
            alt="Logo"
          />
          <p className="hidden xl:block text-sm w-56">
            Заботливая стоматология, которую вы полюбите.
          </p>
        </div>

        <button
          className="md:hidden text-2xl text-blue-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center space-x-2">
            <p className="text-xl">Меню</p>
            <p className="text-3xl">{isOpen ? "✖" : "☰"}</p>
          </div>
        </button>

        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-800">
          <li className="cursor-pointer">Услуги</li>
          <li className="cursor-pointer">O клинике</li>
          <li className="cursor-pointer">Отзывы</li>
          <li className="cursor-pointer">Акции, рассрочки</li>
          <li className="cursor-pointer">Статьи</li>
          <li className="cursor-pointer">Контакты</li>
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col space-y-2 text-sm font-medium text-gray-800">
          <li className="cursor-pointer">Услуги</li>
          <li className="cursor-pointer">O клинике</li>
          <li className="cursor-pointer">Отзывы</li>
          <li className="cursor-pointer">Акции, рассрочки</li>
          <li className="cursor-pointer">Статьи</li>
          <li className="cursor-pointer">Контакты</li>
        </ul>
      )}
    </div>
  );
};

export default NavbarPage;
