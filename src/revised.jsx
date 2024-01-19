function calculteRevised(gender, calories, kJoules, weight, height, age,toggleState,heightInch) {
  let BMR;
  let unit;
  unit = calories ? "Calories/Day" : "KJoules/Day";
  const modifiedWeight = toggleState==="us"?(weight * 0.453592):weight
  const modifiedHeight = toggleState==="us"?((height * 30.48) + (heightInch * 2.54)):height

  //FOR MEN
  //BMR = 13.397W + 4.799H - 5.677A + 88.362
  if (gender === "male") {
    const value = Math.trunc( 13.397 * modifiedWeight + 4.799 * modifiedHeight - 5.677 * age + 88.362)
    BMR = calories
      ? (value * (calories || 1)).toFixed(1)
      : Math.trunc((value * (kJoules || 1)).toFixed(1))
  }
  if (gender === "female") {
    //BMR = 9.247W + 3.098H - 4.330A + 447.593
    const value =Math.trunc( 9.247 * modifiedWeight + 3.098 * modifiedHeight - 4.33 * age + 447.593)
    BMR = calories
      ?  (value * (calories || 1)).toFixed(1)
      : Math.trunc((value * (kJoules || 1)).toFixed(1)) 
  }

  return { BMR, unit };
}

export { calculteRevised };
