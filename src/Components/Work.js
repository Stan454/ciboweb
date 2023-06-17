import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Customer website",
      text: "Your customers can easily interact with your restaurant using the CIBO website",
    },
    {
      image: ChooseMeals,
      title: "Admin Panel",
      text: "With the admin panel you can easily manage your menu and reservations",
    },
    {
      image: DeliveryMeals,
      title: "Delivery",
      text: "CIBO works together with numerous delivery services that are available for your restaurants deliveries",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Info</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          CIBO is a platform designed to make your restaurant easily accessible for customers. Our service includes an online website hosted at our platform and an admin panel ready to use for you and your employees.  
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;