import React from "react";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  FacebookOutlined,
  TwitterOutlined,
  createFromIconfontCN,
} from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
import { useForm } from "react-hook-form";
import { withFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { connect } from "react-redux";
import { createLogIn } from "../../Slices/auth/SignIn";
import { Signin } from "../../Interface/auth/SignIn";
interface LoginValues {
  password: string;
  email: string;
}
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
const Login = (props: any) => {
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.SignIn
  );
  const dispatch = useDispatch<AppDispatch>();
  const handleLogin = (values: any) => {
    dispatch(createLogIn(values));
  };
  const { register } = useForm<LoginValues>({
    defaultValues: { email: "", password: "" },
    // mode: cách để trigger validation, default mặc định là onSubmit
    mode: "onTouched",
  });
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  return (
    <div>
      <Form onFinish={handleLogin} className="container ">
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ height: window.innerHeight }}
        >
          <h3 className="text-center" style={{ fontWeight: 300, fontSize: 35 }}>
            Login CyberBugs
          </h3>
          <div className="d-flex mt-3">
            <Input
              onChange={handleChange}
              style={{ minWidth: 300 }}
              name="email"
              size="large"
              placeholder="email"
              prefix={<UserOutlined />}
            />
          </div>
          <div style={{ color: "red" }}>{errors.email}</div>
          <div className="d-flex mt-3">
            <Space direction="vertical">
              <Input.Password
                onChange={handleChange}
                style={{ minWidth: 300 }}
                size="middle"
                placeholder="input password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                prefix={<LockOutlined />}
                name="password"
              />
            </Space>
          </div>
          <div style={{ color: "red" }}>{errors.password}</div>
          <Button
            htmlType="submit"
            className="mt-5"
            size="large"
            style={{
              width: "100%",
              backgroundColor: "rgb(102,117,223)",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Login
          </Button>
          <div className="social mt-3 d-flex">
            <Button
              style={{ backgroundColor: "rgb(59,89,152)" }}
              icon={
                <IconFont style={{ color: "white" }} type="icon-facebook" />
              }
              size={"large"}
              shape="circle"
            ></Button>
            <div>{props.email}</div>
            <Button
              style={{ marginLeft: "20px" }}
              type="primary"
              shape="circle"
              icon={<TwitterOutlined />}
              size={"large"}
            ></Button>
          </div>
        </div>
      </Form>
    </div>
  );
};
const LoginCyberForm = withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Email is required").email("email is invalid"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must have min 6 characters")
      .max(32, "password must have max 32 characters"),
  }),
  handleSubmit: (e, {props, setSubmitting }) => {
    console.log(e);
    console.log(props);
  },

  displayName: "Login CyberBugs",
})(Login);
export default LoginCyberForm;
