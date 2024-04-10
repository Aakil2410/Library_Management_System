import { handleActions } from "redux-actions";
import { UserActionEnum } from "./actions";
import { IUserStateContext } from "./context";



export const UserReducer = handleActions({
    [UserActionEnum.CREATE_USER]: (state: IUserStateContext, action: ReduxActions.Action<IUserStateContext>) => ({...state, ...action.payload}),
    [UserActionEnum.USER_LOGIN]:(State: IUserStateContext, action: ReduxActions.Action<IUserStateContext>)=>({...State,...action.payload}),
    [UserActionEnum.SET_CURRENT_USER]:(State: IUserStateContext, action: ReduxActions.Action<IUserStateContext>)=>({...State,...action.payload}),
    [UserActionEnum.GET_USER]:(State: IUserStateContext, action: ReduxActions.Action<IUserStateContext>)=>({...State,...action.payload}),
    [UserActionEnum.GET_USER_ID]:(State: IUserStateContext, action: ReduxActions.Action<IUserStateContext>)=>({...State,...action.payload}),
    [UserActionEnum.USER_LOGOUT]:(State: IUserStateContext, action: ReduxActions.Action<IUserStateContext>)=>({...action.payload})
},{});


// export function UserReducer(incomingState: IUserStateContext, action: ReduxActions.Action<IUserStateContext>): IUserStateContext {

//     const { type, payload } = action;

//     switch (type) { 
//         case UserActionEnum.USER_LOGIN:
//             return { ...incomingState, ...payload };
            
//         case UserActionEnum.CREATE_USER:
//             return { ...incomingState, ...payload };
//         case UserActionEnum.USER_LOGOUT:
//             return { ...incomingState, ...payload };
//         case UserActionEnum.SET_CURRENT_USER:
//             return { ...incomingState, ...payload };
//         case UserActionEnum.GET_USER:
//             return { ...incomingState, ...payload };
//         case UserActionEnum.GET_USER_ID:
//                 return { ...incomingState, ...payload };
//         default:
//             return incomingState;
//     }
// }
