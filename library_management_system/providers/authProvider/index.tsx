"use client";
import React, { FC, PropsWithChildren, useContext, useReducer } from "react";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { UserReducer } from "./reducer";
import {
  ILogin,
  INITIAL_STATE,
  IUser,
  IUserActionContext,
  IUserStateContext,
  UserActionContext,
  UserContext,
} from "./context";
import {
  createUserRequestAction,
  logoutUserRequestAction,
  getUserIdDetailsRequestAction,
  loginUserRequestAction,
  setCurrentUserRequestAction,
} from "./actions";
import { instance } from "./apiInstance";

const AuthProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  const { push } = useRouter();

  const loginUser = async (payload: ILogin) => {
    console.log("here");
    try {
      const response = await instance.post(
        `${process.env.NEXT_PUBLIC_PASS}/TokenAuth/Authenticate`,
        payload
      );
      if (response.data.success) {
        localStorage.setItem("token", response.data.result.accessToken);
        dispatch(loginUserRequestAction(response.data.result));
        dispatch(
          getUserIdDetailsRequestAction(response.data.result.userId.user)
        );
        console.log(response.data);
        if (response.data.result.userId === 1) {
          push("/user-dashboard");

          message.success(`Welcome`);
        } else {
          push("/user-dashboard");

          message.success("Welcome");
        }
      } else {
        console.log("why");
        message.error(`${response.data.message} \n ${response.data.details}`);
        // Toastify({
        //     text: `${response.data.message} \n ${response.data.details}`,
        //     duration: 3000}).showToast();
      }
    } catch (error) {
      console.log(error);
      message.error("Login failed");
    }
  };

  const createUser = async (payload: IUser) => {
    try {
      const response = await instance.post(
        `${process.env.NEXT_PUBLIC_PASS}/services/app/Person/Create`,
        payload
      );
      console.log("response:", response);
      if (response.data.success) {
        message.success(`Hi ${response.data.result.name}. `); // ad more to message
        dispatch(createUserRequestAction(response.data.result));
        push("/sign-in"); // try auto login
        message.info("Try logging in");
      } else {
        message.error("Failed to create user");
      }
    } catch (error) {
      console.error("User creation error:", error);
      message.error("Email is already linked to an account.");
    }
  };

  const getUserDetails = async (): Promise<IUser> => {
    const token = localStorage.getItem("token");
    try {
      const response = await instance.get(
        `${process.env.NEXT_PUBLIC_PASS}/services/app/Session/GetCurrentLoginInformations`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const user = response.data.result.user;
      dispatch(setCurrentUserRequestAction(user));
      dispatch(getUserIdDetailsRequestAction(response.data.result));
      return user; // Return the user details
    } catch (error) {
      message.error("User not logged");
      throw error; // Re-throw the error to be handled by the caller
    }
  };

  const logoutUser = () => {
    dispatch(logoutUserRequestAction());
    localStorage.removeItem("token");
    push("/");
  };

  return (
    <UserContext.Provider value={state}>
      <UserActionContext.Provider
        value={{ loginUser, createUser, getUserDetails, logoutUser }}
      >
        {children}
      </UserActionContext.Provider>
    </UserContext.Provider>
  );
};

const useLoginState = (): IUserStateContext => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useLoginState must be used within a UserProvider");
  }
  return context;
};

const useLoginActions = (): IUserActionContext => {
  const context = useContext(UserActionContext);
  if (!context) {
    throw new Error("useLoginActions must be used within a UserProvider");
  }
  return context;
};

// const useUser: any = (): IUserStateContext & IUserActionContext => {
//   return {
//     ...useLoginState(),
//     ...useLoginActions,
//   };
// };

export { AuthProvider, useLoginState,useLoginActions };

function Toastify(arg0: { text: string; duration: number }) {
  throw new Error("Function not implemented.");
}
