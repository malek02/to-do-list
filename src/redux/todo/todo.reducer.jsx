import { v4 as uuidv4 } from 'uuid';
const INITIAL_STATE ={
  item:"",
  editItim:false,
  items:[],
  id:uuidv4()
};

const todoReducer =(state=INITIAL_STATE,action)=>{

    switch (action.type){
        case 'TO_DO_LIST':
        return{
            ...state,
            item: action.payload
        };
        case 'TO_DO_LISTT':
        return{
            ...state,
            editItim: action.payload
        };
        case 'TO_DO_ITEMS':
        return{
            ...state,
            items: action.payload
        };
        case 'TO_DO_ID':
            return{
                ...state,
                id:action.payload
            };
        default:
        return state;
    }
}
export default todoReducer;