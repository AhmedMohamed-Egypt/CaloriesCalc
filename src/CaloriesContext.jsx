import { createContext, useContext, useReducer } from "react";
import { calcMifflin } from "./mifflin";
import { calculteRevised } from "./revised";

const CaloriesContext = createContext();
const initialState = {
  toggle: 1,
  userObject: {
    age: "",
    height: "",
    weight: "",
    equation:"",
    gender: "",
    unit:""

  },
  result: "",
  unit:'',
  errorList:[],
  errorsTxt:[],
};
function reducer(snState, action) {
  switch (action.type) {
    case "provoke": {
      return { ...snState, toggle: action.payload };
    }
    case "collectMale": {

      
      return { ...snState, userObject: action.payload };
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
      let myresult =  {BMR:'',unit:''};
      const userData = Object.keys(snState.userObject).map((key)=>{return {key:key,value:snState.userObject[key]}})
      
      const errors = userData.reduce((acc,cur)=>{
        if(cur.value === "" || !cur.value ){
          
            return [...acc,cur.key]   
          
        
        }else {
          return [...acc]
        }
      },[])

       const lessAge = age < 5 && 'Please Fill Age greater than 5' 
       const maxAge = age > 110 && 'Please Fill Age Less Than 110'  
       const  lessHeight  = height<120 && 'Please Fill Height greater than 120'
       const higherHight = height > 300 && 'Please Fill Height lessThan than 300'
       const minWeight = weight < 25 && 'Please Fill Weight geater than 25'
       const maxWeight = weight > 200 && 'Please Fill Weight lessThan than 200'

      

      
     
 
      const noErros = errors.length === 0 && !lessAge && !maxAge && !lessHeight && !higherHight && !minWeight && !maxWeight
    
      
   
      if(equation === 'mifflin'){
       myresult =  calcMifflin(gender,calories,kJoules,weight,height,age)
      
      }
      if(equation === 'revised'){
        myresult = calculteRevised(gender,calories,kJoules,weight,height,age)
      }

     
      return { ...snState, result: noErros && myresult.BMR,unit: noErros&& myresult.unit ,errorList:errors,errorsTxt:[lessAge,maxAge,lessHeight,higherHight,minWeight,maxWeight]};
    }

    default: {
      throw new Error("Action not Known");
    }
  }
}

function CaloriesProvider({ children }) {
  const [{ toggle, userObject, result,unit,errorList ,errorsTxt}, dispatch] = useReducer(
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
        errorsTxt
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
