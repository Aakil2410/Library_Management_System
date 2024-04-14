"use client";

import React, { useActionState, useState } from "react";
import styles from './signin.module.css';

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

import { useLoginActions } from "../../../../providers/authProvider";
import { ILogin } from "../../../../providers/authProvider/context";
import { useRouter } from "next/navigation";

const SignInPage: React.FC = () => {
    
  const { loginUser } = useLoginActions();
  const {push} = useRouter();

  const onFinish = async (values: ILogin) => {
    console.log('Received values of form: ', values);



    console.log(values);
    if (loginUser) {
      await loginUser(values);
      console.log(values);
      console.log("works");
    } 
  };


  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="userNameOrEmailAddress"
        rules={[{ required: true, message: 'Please input your E-mail!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
     
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="./sign-up">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default SignInPage;
