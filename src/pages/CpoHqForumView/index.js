import React from "react";
import { Typography } from "antd";
import { Layout } from "antd";
import "./style.scss";
import { useAppState } from "context";
import { Counter } from "components";
import { PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Sider, Content } = Layout;

const CpoHqForumView = () => {
  const { forums, setForums } = useAppState();

  function handleAdd() {
    forums.counterList.push({
      title: "AAA",
      counter: 0,
    });

    setForums({ ...forums });
  }

  function handleUpdateItem(index, data) {
    forums.counterList[index] = data;
    setForums({ ...forums });
  }

  function handleRemoveItem(index) {
    forums.counterList.splice(index, 1);
    setForums({ ...forums });
  }
  return (
    <Layout className="hq_forum">
      <Sider className="hq_forum-sidebar" width={200}>
        {forums?.counterList.map((counterItem, index) => (
          <Counter
            key={`key-counter-item-${index}`}
            data={counterItem}
            updateData={(value) => handleUpdateItem(index, value)}
            removeItem={() => handleRemoveItem(index)}
          />
        ))}
        <div className="hq_forum-sidebar-add">
          <button className="hq_forum-sidebar-add-btn" onClick={handleAdd}>
            <PlusOutlined />
          </button>
        </div>
      </Sider>
      <Content className="hq_forum-content">
        <Title>Forums</Title>
      </Content>
    </Layout>
  );
};

export default CpoHqForumView;
