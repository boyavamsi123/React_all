import {GM,GN} from './Message.action'
let intialState = {
    msg:"Hello"
}
let MessageReducer=(state=initialState,action)=>{
    console.log(action)
    console.log(actionType)
    switch(actionTypes){
        case 'GM':
            return {'msg':'GM vamsi'}
        case 'GN':
            return {'msg':'GN Ashu'}
            default:
                return state;
    }
}
export {MessageReducer}
