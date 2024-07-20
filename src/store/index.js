import { configureStore } from "@reduxjs/toolkit";
import userManagementReducer from './slice/userManagementSlice'
import reportReducer from './slice/reportSlice'

const store = configureStore({
    reducer: {
      userManagement: userManagementReducer,
      report : reportReducer
    }
  });
  
  export default store;