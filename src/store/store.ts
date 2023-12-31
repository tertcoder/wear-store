import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

const overLayPagesSlice = createSlice({
  name: "overLayePageSlice",
  initialState: {
    cartIsOpen: false,
    newShoeIsOpen: false,
  },
  reducers: {
    setCartIsOpen: (state, action: PayloadAction<boolean>) => {
      state.cartIsOpen = action.payload;
    },
    setNewShoeIsOpen: (state, action: PayloadAction<boolean>) => {
      state.newShoeIsOpen = action.payload;
    },
  },
});

export const { setCartIsOpen, setNewShoeIsOpen } = overLayPagesSlice.actions;

export const store = configureStore({
  reducer: {
    overLayPages: overLayPagesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const cartIsOpen = (state: RootState) => state.overLayPages.cartIsOpen;

export const newShoeIsOpen = (state: RootState) =>
  state.overLayPages.newShoeIsOpen;
