import React from "react";
const HistoryBox = () => {
  const clearStorage = () => {
    localStorage.clear();
  };

  return (
    <div id="history">
      <b>Mixed</b>
      <div>{localStorage.getItem("mixedHistory")}</div>
      <b>Addition</b>
      <div>{localStorage.getItem("Add")}</div>
      <b>Substraction</b>
      <div>{localStorage.getItem("Sub")}</div>
      <b>Multiplication</b>
      <div>{localStorage.getItem("Mul")}</div>
      <b>Division</b>
      <div>{localStorage.getItem("Div")}</div>
      <div class="tag" onClick={clearStorage}>
        Clear History
      </div>
    </div>
  );
};
export default HistoryBox;
