import { Layout } from "antd";
import React from "react";
import Login from "./Login";
const { Header, Footer, Sider, Content } = Layout;

const LayoutLogin = () => {

  return (
    <div>
      <Layout>
        <Sider
          width={window.innerWidth / 2}
          style={{
            height: window.innerHeight,
            background: "url(https://picsum.photos/500)",
          }}
        ></Sider>
        <Layout >
          <Content>
            <Login/>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutLogin;
