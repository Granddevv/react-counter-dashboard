import React from "react";
import "./style.scss";

export default function PanelItem(props) {
  const { data } = props;
  const { position } = data;

  function getBadgeClass() {
    const { rehire_eligible, voluntary } = data;
    if (rehire_eligible && voluntary) {
      return "panel_item_wrapper-badge green-badge";
    }

    if (rehire_eligible && !voluntary) {
      return "panel_item_wrapper-badge red-badge";
    }

    return "panel_item_wrapper-badge";
  }

  const badgeClass = getBadgeClass();

  return (
    <div className="panel_item_wrapper" {...props}>
      <div className={badgeClass}></div>
      {position}
    </div>
  );
}
