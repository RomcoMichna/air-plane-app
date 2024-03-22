import { configureStore } from "@reduxjs/toolkit";
import textInputReducer from "./textInput/textInputSlice";

export const store = configureStore({
    reducer: {
        textInput: textInputReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;