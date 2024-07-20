import React from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import {
  updateUser,
  resetUser,
  closeAddUserModal,
} from "../../store/slice/userManagementSlice";
import "./AddEditUser.css";
import { Input } from "antd";
import CustomButton from "../Button/button";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 50) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.businessUnit) {
    errors.businessUnit = "Required";
  }

  if (!values.category) {
    errors.category = "Required";
  }

  return errors;
};

const AddEditUser = () => {
  const dispatch = useDispatch();
  const { isEdit, user } = useSelector((state) => state.userManagement);
  const handleCancelAddEditUser = () => {
    dispatch(closeAddUserModal());
    //handle close modal
    console.log("close modal")
  };
  const handleConfirmAddEditUser = () => {
    //handle close modal
  };
  const formik = useFormik({
    initialValues: user,
    enableReinitialize: true,
    validate,
    onSubmit: (values) => {
      dispatch(updateUser(values));
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="modal-overlay">
      <div className="form-modal">
        <div className="form__title">
          {isEdit ? "Edit User" : "Add New User"}
        </div>
        <form onSubmit={formik.handleSubmit} className="add-edit-user-form">
          <div className="add-edit-user-form__field">
            <div className="add-edit-user-form__lable">
              {" "}
              <label htmlFor="name">Name</label>
            </div>
            <div className="add-edit-user-form__input">
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={
                  formik.touched.name && formik.errors.name
                    ? "input-error custom-input-field custom-width"
                    : "custom-width custom-input-field"
                }
              />
            </div>
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="add-edit-user-form__field">
            <div className="add-edit-user-form__lable">
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={
                  formik.touched.email && formik.errors.email
                    ? "input-error custom-width custom-input-field"
                    : "custom-width custom-input-field"
                }
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="add-edit-user-form__field">
            <div className="add-edit-user-form__lable">
              <label htmlFor="businessUnit">Business Unit</label>
            </div>
            <div>
              <input
                id="businessUnit"
                name="businessUnit"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.businessUnit}
                className={
                  formik.touched.businessUnit && formik.errors.businessUnit
                    ? "input-error custom-width custom-input-field"
                    : "custom-width custom-input-field"
                }
              />
            </div>
            {formik.touched.businessUnit && formik.errors.businessUnit ? (
              <div className="error">{formik.errors.businessUnit}</div>
            ) : null}
          </div>
          <div className="add-edit-user-form__field">
            <div className="add-edit-user-form__lable">
              <label htmlFor="category">Category</label>
            </div>
            <select
              id="category"
              name="category"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.category}
              className={
                formik.touched.category && formik.errors.category
                  ? "input-error custom-width custom-input-field"
                  : "custom-width  custom-input-field"
              }
            >
              <option
                className="form-options"
                value=""
                label="Select category"
              />
              <option
                className="form-options"
                value="Category1"
                label="Category 1"
              />
              <option
                className="form-options"
                value="Category2"
                label="Category 2"
              />
              <option
                className="form-options"
                value="Category3"
                label="Category 3"
              />
            </select>
            {formik.touched.category && formik.errors.category ? (
              <div className="error">{formik.errors.category}</div>
            ) : null}
          </div>

          <div className="form-buttons">
            <CustomButton
              className="custom-btn custom-btn-secondry"
              text="Cancel"
              type="button"
            ></CustomButton>
            {isEdit ? (
              <CustomButton
                className="custom-btn custom-btn-primary"
                text="Add Sub User"
                type="button"
                onClick={handleCancelAddEditUser}
              ></CustomButton>
            ) : (
              <CustomButton
              type="button"
                className="custom-btn custom-btn-primary"
                text="Update"
                onClick={handleConfirmAddEditUser}
              ></CustomButton>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditUser;
