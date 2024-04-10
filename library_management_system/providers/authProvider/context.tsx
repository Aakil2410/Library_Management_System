import { createContext } from "react";

export interface ILogin {
  //id: string;
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  surname: string;
  contactNumber: string;
  emailAddress: string;
  password: string;
}

export const INITIAL_STATE: IUserStateContext = {};

export interface IUserStateContext {
  readonly createUser?: IUser;
  readonly userLogin?: ILogin;
  readonly user?: IUser;
  readonly userId?: number;
  readonly currentUser?: IUser;
  readonly userLogOut?: IUser;
}

export interface IUserActionContext {
  loginUser?: (payload: ILogin) => void;
  createUser?: (payload: IUser) => void;
  logoutUser?: () => void;
  setCurrentUser?: (user: IUser) => void;
  getUserDetails?: () => Promise<IUser>;
  setUserId?: (userId: number) => void;
}

const UserContext = createContext<IUserStateContext>(INITIAL_STATE);

const UserActionContext = createContext<IUserActionContext>({});

export {UserContext,UserActionContext};