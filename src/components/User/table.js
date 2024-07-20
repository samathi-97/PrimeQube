import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Table ,Tag } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import ActionModal from "../Modals/ActionModal/actionModal";
import {
  openDeleteUserModal,
  closeDeleteUserModal,
} from "../../store/slice/userManagementSlice";

const data = [
  {
    key: "1",
    name: "John Brown",
    email: "john.brown@example.com",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["Admin"],
  },
  {
    key: "2",
    name: "Jim Green",
    email: "jim.green@example.com",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["Sub user"],
  },
  {
    key: "3",
    name: "Joe Black",
    email: "joe.black@example.com",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["Sub user"],
  },
  {
    key: "4",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 29,
    address: "Paris No. 2 Lake Park",
    tags: ["Admin"],
  },
  {
    key: "5",
    name: "Chris Johnson",
    email: "chris.johnson@example.com",
    age: 37,
    address: "Tokyo No. 3 Lake Park",
    tags: ["Sub user"],
  },
];

const  UserTable = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div>
          <a>{text}</a>
          <br />
          <span>{record.email}</span>
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "tags",
      key: "tags",
      render: (tags) => (
        <Space>
          {tags.map((tag) => (
            <Tag color="#1877f2" bordered={false} key={tag}>
            {tag.toLowerCase()}
            </Tag>
          ))}
          </Space>
      ),
    },

    {
      title: "Created Date",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Category",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>
            <EditOutlined />
          </a>
          <a onClick={() => handleDeleteExistingUser()}>
            <DeleteOutlined />
          </a>
        </Space>
      ),
    },
  ];

  const dispatch = useDispatch();

  const isDeleteUserModalOpen = useSelector(
    (state) => state.userManagement.isDeleteUserModalOpen
  );
  const handleDeleteExistingUser = () => {
    dispatch(openDeleteUserModal());
    console.log("open delete");
  };
  const handleConfirmDelete = () => {
    dispatch(closeDeleteUserModal());
  };
  const handleCancelDelete = () => {
    dispatch(closeDeleteUserModal());
    console.log("DELETE");
  };
  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
      {isDeleteUserModalOpen && (
        <ActionModal
          title="Delete User"
          message={"Are you sure you want to delete ${selectedUser?.name}?"}
          button1Config={{
            className: " custom-btn custom-btn-secondry",
            text: "Cancel",
            onClick: handleCancelDelete,
          }}
          button2Config={{
            className: " custom-btn custom-btn-primary",
            text: "Yes,Delete",
            onClick: handleConfirmDelete,
          }}
        />
      )}
    </div>
  );
};

export default UserTable;
