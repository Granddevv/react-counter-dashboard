import React from "react";
import { Modal } from "antd";
import "./style.scss";

export default function DetailModal({ isOpen, onClose, data }) {
  const { position, name, profile_link, termination_reason } = data;
  function getBadgeClass() {
    const { rehire_eligible, voluntary } = data;
    if (rehire_eligible && voluntary) {
      return "panel_detail-header-badge green-badge";
    }

    if (rehire_eligible && !voluntary) {
      return "panel_detail-header-badge red-badge";
    }

    return "panel_detail-header-badge";
  }

  const badgeClass = getBadgeClass();

  return (
    <Modal
      visible={isOpen}
      title=""
      header={null}
      footer={null}
      onCancel={onClose}
    >
      <div className="panel_detail">
        <div className="panel_detail-header">
          <div className={badgeClass}></div>
          {position}
        </div>
        <div className="panel_detail-content">
          <p>
            Go to <a href={profile_link}>{name}'s Profile</a>
          </p>
          <p>{termination_reason}</p>
        </div>
      </div>
    </Modal>
  );
}
