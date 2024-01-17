import { createContext, useContext, useReducer } from "react";
import { calcMifflin } from "./mifflin";
import { calculteRevised } from "./revised";
import { katch } from "./katch";

const CaloriesContext = createContext();
const initialState = {
  toggle: 'us',
  userObject: {
    age: "",
    height: "",
    weight: "",
    equation:"",
    gender: "",
    unit:"",
    katchStatus:'notok',
    heightInch:" "
    

  },
  result: "",
  unit:'',
  errorList:[],
  errorsTxt:[],
  bodyFat:"",
 
};
function reducer(snState, action) {
  switch (action.type) {
    case "provoke": {
      return { ...snState, toggle: action.payload,userObject:initialState.userObject,result:"",unit:"",errorList:[],errorsTxt:[],bodyFat:""};
    }
    case "collectMale": {

      const resetErrors = action.payload.equation === 'katch'&&[] || []
      
     
      return { ...snState, userObject: action.payload,errorList:resetErrors,errorsTxt:resetErrors,result:""};
    }
    case "bodyFat":{
        
        return {...snState,bodyFat:action.payload}
    }
    case "calc": {
      //Mifflin-St Jeor Equation:
      //For men
      //BMR = 10W + 6.25H - 5A + 5
      //For Women
      //BMR = 10W + 6.25H - 5A - 161
     
      const calories = snState.userObject.unit === "calories" && 1;
      const kJoules = snState.userObject.unit === "kJoules" && 4.15;
      const height = +snState.userObject.height
      const weight = snState.userObject.weight 
      const age = snState.userObject.age
      const equation = snState.userObject.equation
      const gender = snState.userObject.gender
      const bodyFat = snState.bodyFat
      let myresult =  {BMR:'',unit:''};
      const userData = Object.keys(snState.userObject).map((key)=>{return {key:key,value:snState.userObject[key]}})
      const toggleState = snState.toggle
      const heightInch = snState.userObject.heightInch
      
      const errors = equation!=="katch" ? userData.reduce((acc,cur)=>{
        if(cur.value === "" || !cur.value  ){
          
            return [...acc,cur.key]   
          
        
        }else {
          return [...acc]
        }
      },[]):[]

       const lessAge = age < 5 && 'Please Fill Age greater than 5' 
       const maxAge = age > 110 && 'Please Fill Age Less Than 110'  
       const  lessHeight  = toggleState === 'metric' &&  height<120 && 'Please Fill Height greater than 120 Cm'
       const higherHight = toggleState === 'metric' &&  height > 300 && 'Please Fill Height lessThan than 300 Cm'
       const minWeight = toggleState === 'metric' &&  weight < 25 && 'Please Fill Weight geater than 25 Kg'
       const maxWeight = toggleState === 'metric'&&  weight > 200 && 'Please Fill Weight lessThan than 200 Kg'
       const generalError = equation !== "katch" ? [lessAge,maxAge,lessHeight,higherHight,minWeight,maxWeight] :[]
       
       const commonError = errors.length === 0 && !lessAge && !maxAge && !lessHeight && !higherHight && !minWeight && !maxWeight
       const errorKatch = bodyFat && weight 
      
      
 
      const noErros = equation !== "katch" ?  commonError : errorKatch
    
      
   
      if(equation === 'mifflin'){
       myresult =  calcMifflin(gender,calories,kJoules,weight,height,age,toggleState,heightInch)
      
      }
      if(equation === 'revised'){
        myresult = calculteRevised(gender,calories,kJoules,weight,height,age,toggleState,heightInch)
      }
      if(equation === "katch"){
        myresult =  katch(gender, calories, kJoules, weight,bodyFat,toggleState,heightInch)
      }

     
      return { ...snState, result: noErros && myresult.BMR,unit: noErros&& myresult.unit ,errorList:errors,errorsTxt:generalError};
    }

    default: {
      throw new Error("Action not Known");
    }
  }
}

function CaloriesProvider({ children }) {
  const [{ toggle, userObject, result,unit,errorList ,errorsTxt,bodyFat}, dispatch] = useReducer(
    reducer,
    initialState
  );

  function provkeToggle(index) {
    dispatch({ type: "provoke", payload: index });
  }
  function collectuserObject(data) {
    dispatch({ type: "collectMale", payload: data });
  }
  function calcluateCalories() {
    dispatch({ type: "calc" });
  }
  function getBodyFat(bodyFat){
    
    dispatch({type:'bodyFat',payload:bodyFat})
  }

  return (
    <CaloriesContext.Provider
      value={{
        toggle,
        provkeToggle,
        userObject,
        collectuserObject,
        calcluateCalories,
        result,
        unit,
        errorList,
        errorsTxt,
        bodyFat,
        getBodyFat,
        
      }}
    >
      {children}
    </CaloriesContext.Provider>
  );
}

function UseCalories() {
  const context = useContext(CaloriesContext);
  if (context === undefined) {
    throw new Error("The Context is used out of the Scope");
  }
  return context;
}

export { CaloriesProvider, UseCalories };
