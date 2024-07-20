import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TabComponent from "../components/User/tabComponent";
import PopupModal from "../components/Modals/ActionModal/actionModal";
import "./user.css";
import AddEditUser from "../components/AddEditUserModal/AddEditUser";
import CustomButton from "../components/Button/button";
import { useDispatch, useSelector } from "react-redux";
import { openAddUserModal } from "../store/slice/userManagementSlice";

const User = () => {
  const dispatch = useDispatch();

  const isAddUserModalOpen = useSelector(
    (state) => state.userManagement.isAddUserModalOpen
  );

  const handleAddUser = () => {
    dispatch(openAddUserModal());
    console.log("open modal");
  };

  return (
    <div>
      {isAddUserModalOpen && <AddEditUser />}
      <div className="user-management-containe">
        <div className="user-management-title">User Management</div>
        <div>
          <CustomButton
            text="Add New User"
            className="custom-btn custom-btn-primary"
            onClick={handleAddUser}
          >
            <PlusOutlined />
          </CustomButton>
        </div>
      </div>
      <div className="tab-component-container">
        {" "}
        <TabComponent />
      </div>
    </div>
  );
};

export default User;
