function katch (gender, calories, kJoules, weight,bodyFat,toggleState){
   const modifiedWeight = toggleState==="us"?(weight * 0.453592):weight
   let BMR ;
   const unit  = calories ? 'Calories/Day' : 'KJoules/Day'
  //BMR = 370 + 21.6(1 - F)W
   if(gender === "male" || gender === "female"){
    const calcBodyFat = (+bodyFat / 100)
    
    BMR =Math.trunc( (((370 + (21.6 * (1 - calcBodyFat)) * modifiedWeight)) *  ((calories || 1) * (kJoules || 1))))
   }
  
 

   return {BMR,unit}

}

export {katch}