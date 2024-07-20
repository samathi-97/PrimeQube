import React from "react";
import { Tabs } from "antd";
import "./tab.css";
import UsersTable from "./table";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Existing Users",
    children: <UsersTable />,
  },
  // {
  //   key: "2",
  //   label: "Pending Users",
  //   children: "Content of Tab Pane 2",
  // },
];
const TabComponent = () => (
  <Tabs
    defaultActiveKey="1"
    items={items}
    onChange={onChange}
    className="col"
  />
);
export default TabComponent;
