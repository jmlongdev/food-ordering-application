import React, { useState, useEffect, useCallback } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const FIREBASE_MEAL_URL =
  "https://food-order-app-aad7a-default-rtdb.firebaseio.com/id/meals.json";

// No need for props either
const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const fetchMealsHandler = useCallback(async () => {
    try {
      const response = await fetch(FIREBASE_MEAL_URL);
      if (!response.ok) {
        throw new Error("Unable to get Meals as this time");
      }
      const data = await response.json();
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      console.log(loadedMeals);

      setMeals(loadedMeals);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchMealsHandler();
  }, [fetchMealsHandler]);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
