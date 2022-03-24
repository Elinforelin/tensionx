

import classes from "./style.module.css";

export const useDropDownInformation = () => {
  function selectedColor(field) {
    const speed = parseInt(field);
    if (speed < 50) {
      return classes.red;
    } else if (speed <= 89 && speed >= 80) {
      return classes.green;
    } else if (speed >= 90) {
      return classes.blue;
    } else if (speed <= 79 && speed >= 50) return classes.yellow;
  }

  return { selectedColor }
};
