import React from "react";
import { Typography, Layout, Tabs } from "antd";
import "./style.scss";
import {
  rehireEligibleEmployees,
  rehireInellgibleEmployees,
  rehireUnknownEmployees,
} from "../../mockEmployees";
import Panel from "./Panel";

const { Title } = Typography;
const { Content } = Layout;
const { TabPane } = Tabs;

const TAB_REHIRE_ELIGIBLE = "TAB_REHIRE_ELIGIBLE";
const TAB_REHIRE_INELIGIBLE = "TAB_REHIRE_INELIGIBLE";
const TAB_REHIRE_UNKNOWN = "TAB_REHIRE_UNKNOWN";

const DashboardView = () => {
  return (
    <Content className="hq_dashboard">
      <Title>DASHBOARD</Title>
      <Tabs defaultActiveKey={TAB_REHIRE_ELIGIBLE}>
        <TabPane tab="Rehire Eligible" key={TAB_REHIRE_ELIGIBLE}>
          <Panel data={rehireEligibleEmployees} />
        </TabPane>
        <TabPane tab="Rehire Ineligible" key={TAB_REHIRE_INELIGIBLE}>
          <Panel data={rehireInellgibleEmployees} />
        </TabPane>
        <TabPane tab="Rehire Unknown" key={TAB_REHIRE_UNKNOWN}>
          <Panel data={rehireUnknownEmployees} />
        </TabPane>
      </Tabs>
    </Content>
  );
};

export default DashboardView;
