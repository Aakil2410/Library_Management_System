import { createContext } from "react";

export interface ILogin {
  //id: string;
  userNameOrEmailAddress: string;
  password: string;
}

export interface IUser {
  //d: string;
  name: string;
  surname: string;
  gender: string
  email: string;
  contactNumber: string;
  address?: string;
  password: string;
}
 
export interface IUserStateContext {
  readonly createUser?: IUser; 
  readonly UserLogin?: ILogin;
  readonly user?: IUser;
  readonly userId?: string;
  readonly currentUser?: IUser;
  readonly userLogOut?: IUser;
}

export const INITIAL_STATE: IUserStateContext = {};

export interface IUserActionContext {
  loginUser?: (payload: ILogin) => void;
  createUser?: (payload: IUser) => void;
  logoutUser?: () => void;
  setCurrentUser?: (user: IUser) => void;
  getUserDetails?: () => Promise<IUser>;
  setUserId?: (userId: number) => void;
}

export const UserContext = createContext<IUserStateContext>(INITIAL_STATE);

export const UserActionContext = createContext<IUserActionContext>({});
