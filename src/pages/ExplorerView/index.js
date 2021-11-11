import React from "react";
import { Typography, Layout } from "antd";
import "./style.scss";
const { Content } = Layout;
const { Title } = Typography;

const ExplorerView = () => {
  return (
    <Content className="hq_explorer">
      <Title>EXPLORER</Title>
    </Content>
  );
};

export default ExplorerView;
