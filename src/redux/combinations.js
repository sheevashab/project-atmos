import { createSlice } from "@reduxjs/toolkit";

export const combinationsSlice = createSlice({
  name: "combinations",
  initialState: [
    { homePlanId: 1, lotId: 1 },
    { homePlanId: 1, lotId: 2 },
    { homePlanId: 1, lotId: 3 },
    { homePlanId: 2, lotId: 1 },
    { homePlanId: 2, lotId: 4 },
    { homePlanId: 2, lotId: 3 },
    { homePlanId: 3, lotId: 3 },
    { homePlanId: 3, lotId: 2 },
    { homePlanId: 3, lotId: 1 },
    { homePlanId: 4, lotId: 3 },
    { homePlanId: 4, lotId: 2 },
    { homePlanId: 4, lotId: 4 },
  ],
  reducers: {
    //logic to show only combinations that match selected homePlanId or LotId
    // showModal: (state, action) => {
    //   const index = state.findIndex((combination) => combinationsSlice.homePlanId == action.payload.homePlanId)
    //   state[index] = action.payload;
    // },
  },
});

// export const { showModal } = combinationsSlice.actions;
export default combinationsSlice.reducer;
