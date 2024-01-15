function calculteRevised(gender, calories, kJoules, weight, height, age){

    

    let BMR;
    let unit;
    unit = calories ? 'Calories/Day' : 'KJoules/Day'
   
    //FOR MEN
    //BMR = 13.397W + 4.799H - 5.677A + 88.362
    if(gender ==='male'){
        const value = ((13.397 * weight)+ (4.799 * height) - (5.677 *  age) + 88.362)
        BMR =  calories ? (value  * (calories||1)).toFixed(1): (value * (kJoules||1)).toFixed(1)
        
        
    }
    if(gender === 'female'){
        //BMR = 9.247W + 3.098H - 4.330A + 447.593
        const value = (9.247 * weight) + (3.098 * height) - (4.330 * age)  + 447.593
        BMR = BMR =  calories ? (value  * (calories||1)).toFixed(1) : (value * (kJoules||1)).toFixed(1)
    }
    

    return  {BMR,unit}
   

}

export {calculteRevised}