import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isReportOpen: false,
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: { 
    openReportModal: (state, action) => {
      state.isReportOpen = true;
      // state.isDeleteUserModalOpen = action.payload;
    },
    closeReportModal: (state, action) => {
        state.isReportOpen = false;
        // state.isDeleteUserModalOpen = action.payload;
      },
  },
});

export const {
    openReportModal,
    closeReportModal
} = reportSlice.actions;

export default reportSlice.reducer;
