import { createAction } from "redux-actions";
import { ILogin, IUser ,IUserStateContext } from "./context";

export enum UserActionEnum{
    USER_LOGIN = 'USER_LOGIN',
    CREATE_USER="CREATE_USER",
    GET_USER="GET_USER",
    USER_LOGOUT = 'USER_LOGOUT',
    SET_CURRENT_USER = 'SET_CURRENT_USER',
    GET_USER_ID = 'GET_USER_ID'
}

export const loginUserRequestAction = createAction<IUserStateContext, ILogin>(UserActionEnum.USER_LOGIN,(UserLogin)=>({UserLogin}))
export const createUserRequestAction=createAction<IUserStateContext,IUser>(UserActionEnum.CREATE_USER,(createUser)=>({createUser}));
export const getUserDetailsRequestAction = createAction<IUserStateContext, string>(UserActionEnum.GET_USER,(id)=>({}));
export const logoutUserRequestAction = createAction<IUserStateContext>(UserActionEnum.USER_LOGOUT,()=>({}))
export const setCurrentUserRequestAction = createAction<IUserStateContext, IUser>(UserActionEnum.SET_CURRENT_USER,(currentUser)=>({currentUser}))
export const getUserIdRequestAction = createAction<IUserStateContext, number>(UserActionEnum.GET_USER_ID, (id) => ({}));