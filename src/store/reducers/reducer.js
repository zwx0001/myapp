const defaultsState={
    arr:[]
}
export default (state=defaultsState,action)=>{
    let newState={...state};
    const {type}=action;
    switch(type){
        case "UPDATA":
        newState.arr=action.data;
        return newState;
        default:
        return newState;
    }
}