"use client";
// pages/signin.tsx

import React, { useState } from "react";
import { useStyles } from "./style";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

import { useUser } from "../../../../providers/authProvider";
import { ILogin } from "../../../../providers/authProvider/context";
import { useRouter } from "next/navigation";

const SignInPage: React.FC = () => {
    
  const { loginUser } = useUser();
  const { styles } = useStyles();
  const {push} = useRouter();

  const onFinish = async (values: ILogin) => {
    console.log('Received values of form: ', values);



    console.log(values);
    if (loginUser) {
      await loginUser(values);
      console.log(values);
      console.log("works");
    } else {
        console.log("No login");
        console.log("No login");
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
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
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
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default SignInPage;
