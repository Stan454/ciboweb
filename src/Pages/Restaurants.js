import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from "../Assets/Logo.svg";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get('http://localhost:8080/restaurant/getAll');
      setRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const handleRestaurantClick = (restaurantId) => {
    // Handle the click event for a restaurant
    console.log('Restaurant clicked:', restaurantId);
  };

  return (
    <div>
    <h1>Restaurants</h1>
    {restaurants.length > 0 ? (
       <div className="restaurant-list">
       {restaurants.map(restaurant => (
         <section key={restaurant.id} className="restaurant-section" onClick={() => handleRestaurantClick(restaurant.id)}>
                    {restaurant.image ? (
              <img src={restaurant.image} alt={restaurant.name} className="restaurant-img" />
            ) : (
              <img src={Logo} className="restaurant-img"/>
            )}
           <h2>{restaurant.name}</h2>
           <p>{restaurant.description}</p>
           <img src={restaurant.imageUrl} alt={restaurant.name} />
         </section>
       ))}
     </div>
    ) : (
      <p>Loading restaurants...</p>
    )}
  </div>
  
  );
};

export default Restaurants;
