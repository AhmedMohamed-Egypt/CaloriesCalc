function calcMifflin(gender, calories, kJoules, weight, height, age) {
  let BMR;
  let unit;
  unit = calories ? 'Calories/Day' : 'KJoules/Day'
  switch (gender) {
    case "male":
      {
        BMR =
          Math.max((10 * weight) + (6.25 * height) - (5 * age) + 5) *
            ((calories || 1) * (kJoules || 1)).toFixed(1) 
        
      }
      break;
    case "female":
      {
        BMR =
          Math.max((10 * weight) + (6.25 * height) - (5 * age) - 161) *
            ((calories || 1) * (kJoules || 1)).toFixed(1)
      }
      break;

    default: {
      BMR = undefined;
    }
  }

  return {BMR,unit};
}

export { calcMifflin };
