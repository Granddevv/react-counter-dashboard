import React from "react";
import { Typography } from "antd";
import { Layout } from "antd";
import "./style.scss";
import { useAppState } from "context";
import { Counter } from "components";
import { PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Sider, Content } = Layout;

const CpoHqPollsView = () => {
  const { polls, setPolls } = useAppState();

  function handleAdd() {
    polls.counterList.push({
      title: "AAA",
      counter: 0,
    });

    setPolls({ ...polls });
  }

  function handleUpdateItem(index, data) {
    polls.counterList[index] = data;
    setPolls({ ...polls });
  }

  function handleRemoveItem(index) {
    polls.counterList.splice(index, 1);
    setPolls({ ...polls });
  }
  return (
    <Layout className="hq_poll">
      <Sider className="hq_poll-sidebar" width={200}>
        {polls?.counterList.map((counterItem, index) => (
          <Counter
            key={`key-counter-item-${index}`}
            data={counterItem}
            updateData={(value) => handleUpdateItem(index, value)}
            removeItem={() => handleRemoveItem(index)}
          />
        ))}
        <div className="hq_poll-sidebar-add">
          <button className="hq_poll-sidebar-add-btn" onClick={handleAdd}>
            <PlusOutlined />
          </button>
        </div>
      </Sider>
      <Content className="hq_poll-content">
        <Title>Polls</Title>
      </Content>
    </Layout>
  );
};

export default CpoHqPollsView;
