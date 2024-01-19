function calcMifflin(gender, calories, kJoules, weight, height, age,toggleState,heightInch) {
  let BMR;
  let unit;
  const modifiedWeight = toggleState==="us"?(weight * 0.453592):weight
  const modifiedHeight = toggleState==="us"?((height * 30.48) + (heightInch * 2.54)):height
 
  unit = calories ? 'Calories/Day' : 'KJoules/Day'
  switch (gender) {
    case "male":
      {
        BMR =
        Math.trunc(
         ((10 * modifiedWeight) + (6.25 * (modifiedHeight)) - (5 * age) + 5) *
            ((calories || 1) * (kJoules || 1)).toFixed(0)
            )
      }
      break;
    case "female":
      {
        BMR =Math.trunc(
          ((10 * (modifiedWeight)) + (6.25 * modifiedHeight) - (5 * age) - 161) *
            ((calories || 1) * (kJoules || 1)).toFixed(0)
        )
      }
      break;

    default: {
      BMR = undefined;
    }
  }

  return {BMR,unit};
}

export { calcMifflin };
