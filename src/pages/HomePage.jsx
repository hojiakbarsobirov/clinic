import React from "react";
import NavbarPage from "../components/NavbarPage";
import HeaderPage from "../components/HeaderPage";
import DirectionPage from "../components/DirectionPage";
import AchievedPage from "../components/AchievedPage";
import CostOfTreatment from "../components/CostOfTreatment";
import CreatorClinic from "../components/CreatorClinic";
import TeamsPage from "../components/TeamsPage";
import AboutImg from "../components/AboutImg";
import DoctorsPage from "../components/DoctorsPage";
import DoctorsPage2 from "../components/DoctorsPage2";

const HomePage = () => {
  return (
    <>
      <NavbarPage />
      <HeaderPage />
      <DirectionPage />
      <AchievedPage />
      <CostOfTreatment />
      <CreatorClinic />
      <TeamsPage />
      <AboutImg />
      <DoctorsPage/>
      <DoctorsPage2/>
    </>
  );
};

export default HomePage;
