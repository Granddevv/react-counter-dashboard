import React, { useState } from "react";
import { Input } from "antd";
import {
  UpOutlined,
  DownOutlined,
  MinusOutlined,
  EditOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import "./style.scss";

export default function Counter({ data, updateData, removeItem }) {
  const { title, counter } = data;
  const [editMode, setEditMode] = useState(false);

  function handleInc() {
    updateData({
      ...data,
      counter: counter + 1,
    });
  }

  function handleDec() {
    updateData({
      ...data,
      counter: counter - 1,
    });
  }

  function handleTitleUpdate(evt) {
    updateData({
      ...data,
      title: evt.target.value,
    });
  }
  return (
    <div className="counter">
      <div className="counter-main">
        {!editMode && (
          <h4>
            {title} Counter: {counter}
          </h4>
        )}
        {editMode && (
          <Input
            className="counter-main-title"
            value={title}
            onChange={handleTitleUpdate}
          ></Input>
        )}
        <div className="counter-main__tool">
          <button className="counter-main__tool-btn" onClick={handleInc}>
            <UpOutlined />
          </button>
          <button className="counter-main__tool-btn" onClick={handleDec}>
            <DownOutlined />
          </button>
        </div>
      </div>
      <div className="counter-action">
        <button className="counter-action-btn" onClick={removeItem}>
          <MinusOutlined />
        </button>
        <button
          className="counter-action-btn"
          onClick={() => setEditMode(!editMode)}
        >
          {!editMode && <EditOutlined />}
          {editMode && <CheckOutlined />}
        </button>
      </div>
    </div>
  );
}
