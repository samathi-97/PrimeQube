import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEdit: false,
  isDeleteUserModalOpen: false,
  isAddUserModalOpen:false,
  user: {
    name: '',
    email: '',
    businessUnit: '',
    category: '',
  },
};

const userManagementSlice = createSlice({
  name: "userManagement",
  initialState,
  reducers: {
    setEditMode: (state, action) => {
      state.isEdit = action.payload.isEdit;
      state.user = action.payload.user || initialState.user;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    resetUser: () => initialState,
    addUser: (state, action) => {},
    editUser: (state, action) => {},
    openDeleteUserModal: (state, action) => {
      state.isDeleteUserModalOpen = true;
      // state.isDeleteUserModalOpen = action.payload;
    },
    openAddUserModal: (state, action) => {
      state.isAddUserModalOpen = true;
      // state.isDeleteUserModalOpen = action.payload;
    },
    closeAddUserModal:  (state) => {
      state.isAddUserModalOpen = false;
      // state.userIdToDelete = null;
    },
    closeDeleteUserModal: (state) => {
      state.isDeleteUserModalOpen = false;
      // state.userIdToDelete = null;
    },
  },
});

export const {
  openDeleteUserModal,
  openAddUserModal,
  closeDeleteUserModal,
  closeAddUserModal,
  addUser,
  editUser,
  setEditMode,
  updateUser,
  resetUser,
} = userManagementSlice.actions;

export default userManagementSlice.reducer;
