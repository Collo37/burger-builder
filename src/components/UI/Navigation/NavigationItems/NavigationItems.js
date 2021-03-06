import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigaionItem/NavigationItem";

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>
        BurgerBuilder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
