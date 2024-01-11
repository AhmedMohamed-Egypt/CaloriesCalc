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
    equation: "",
    gender: "",
    BMRFormula: "",
  },
  result: "",
  unit:''
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
      const height = snState.userObject.height
      const weight = snState.userObject.weight
      const age = snState.userObject.age
      const equation = snState.userObject.euqation
      const gender = snState.userObject.gender
      let myresult =  {BMR:'',unit:''};


      if(equation === 'mifflin'){
       myresult =  calcMifflin(gender,calories,kJoules,weight,height,age)
      
      }
      if(equation === 'revised'){
        myresult = calculteRevised(gender,calories,kJoules,weight,height,age)
      }

     
      return { ...snState, result: myresult.BMR,unit:myresult.unit };
    }

    default: {
      throw new Error("Action not Known");
    }
  }
}

function CaloriesProvider({ children }) {
  const [{ toggle, userObject, result,unit }, dispatch] = useReducer(
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
        unit
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
