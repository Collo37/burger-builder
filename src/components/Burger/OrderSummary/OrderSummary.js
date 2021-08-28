import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = props.ingredients;
  const order = Object.keys(ingredientSummary).map((ingredient, index) => {
    return (
      <li
        key={ingredient + index}
        style={{
          display: "flex",
          flexDirection: "row",
          width: "30%",
          justifyContent: "space-between",
        }}
      >
        <span style={{ textTransform: "capitalize" }}>{ingredient}:</span>{" "}
        {ingredientSummary[ingredient]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{order}</ul>
      <p>
        <strong> Total: {props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
