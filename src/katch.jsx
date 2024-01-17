function katch (gender, calories, kJoules, weight,bodyFat){
   let BMR ;
   const unit  = calories ? 'Calories/Day' : 'KJoules/Day'
  //BMR = 370 + 21.6(1 - F)W
   if(gender === "male" || gender === "female"){
    const calcBodyFat = (+bodyFat / 100)
    console.log( calcBodyFat)
    BMR =Math.ceil((370 + 21.6*(1 - calcBodyFat) * weight)) *  ((calories || 1) * (kJoules || 1))
   }
  
 

   return {BMR,unit}

}

export {katch}