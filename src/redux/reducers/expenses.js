import { ADD_EXPENSE,DEL_EXPENSE,SEARCH_EXPENSE } from "../action-types/expenses";

const localKey ='expense-list'

const initialList =()=>{
    const list = localStorage.getItem('expense-list');
   console.log(list);
    let expensesList =[];
    if(list){
        expensesList= JSON.parse(list);
    }
    console.log(expensesList);
    return expensesList;
}
const initialState = {
    expenseList:initialList(),
    query:""

};

export const expenseReducer = (state= initialState,action)=>{
    switch(action.type){
        case ADD_EXPENSE:{
            localStorage.setItem('expense-list'
            ,JSON.stringify([...state.expenseList,action.data]));
            return {
                ...state,
                expenseList: [...state.expenseList,action.data],
                query:'',
            };
        }
        case DEL_EXPENSE:{
            const {data} = action;
            const upadtedList =  state.expenseList.filter(
                (item)=>item.createdAt !== data.createdAt
             );
            localStorage.setItem('expense-list',JSON.stringify(upadtedList));
            return {
                ...state,
                expenseList:upadtedList
            };
        }
        case SEARCH_EXPENSE:{
            const {query}  = action;
            return{
                ...state,
                query,
            }
        }
        default:
            return {...state,};
    }
}