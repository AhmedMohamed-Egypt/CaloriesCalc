//بسم الله الرحمن الرحيم
import { createStore } from "redux";

const initalState={

    balance:0,
    loan:0,
    loanPurpose:""

}

function reducer(state = initalState,action){

    switch (action.type){
        case 'account/deposit':{
            return {...state,balance:action.payload + state.balance}
        }
        case 'account/withdraw':{
            return {...state,balance:state.balance - action.payload}
        }
        case 'loan':{
            if(state.loan > 0) return state

            return {...state,loan:action.payload,balance:state.balance + action.payload , loanPurpose:'Buy A car'}
        }
    }
}

const store = createStore(reducer)

store.dispatch({type:'account/deposit',payload:500})
store.dispatch({type:'account/withdraw',payload:300})
store.dispatch({type:'loan',payload:100})
console.log(store.getState())