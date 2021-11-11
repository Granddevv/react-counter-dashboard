import React, { useCallback, useEffect, useState } from "react";
import { PanelItem, DetailModal } from "components";
import "./style.scss";

export default function Panel({ data }) {
  const [displayData, setDisplayData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [detailData, setDetailData] = useState({});

  const handleSortData = useCallback(() => {
    let result = {};
    data.forEach((item) => {
      if (result[item.terminated_date]) {
        result[item.terminated_date].push(item);
      } else {
        result[item.terminated_date] = [item];
      }
    });
    let sortData = Object.entries(result);
    const finalData = sortData
      .sort((itemA, itemB) => itemA[0] > itemB[0])
      .map((item) => ({ date: item[0], data: item[1] }));
    setDisplayData(finalData);
  }, [data]);

  useEffect(() => {
    handleSortData();
  }, [data, handleSortData]);

  function handleDetail(item) {
    setDetailData(item);
    setIsOpen(true);
  }

  return (
    <div className="panel">
      {displayData.map((displayItem) => (
        <div className="panel-item">
          <h3>{displayItem.date}</h3>
          <div className="panel-item-list">
            {displayItem.data.map((item) => (
              <PanelItem data={item} onClick={() => handleDetail(item)} />
            ))}
          </div>
        </div>
      ))}
      <DetailModal
        isOpen={isOpen}
        data={detailData}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
