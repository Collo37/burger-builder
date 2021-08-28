import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingredientKeys) => {
      return [...Array(props.ingredients[ingredientKeys])].map((_, index) => {
        return (
          <BurgerIngredient
            key={ingredientKeys + index}
            type={ingredientKeys}
          />
        );
      });
    })
    .reduce((arr, el) => arr.concat(el), []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <p className={classes.Disclaimer}>Please start adding ingredients</p>
    );
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
