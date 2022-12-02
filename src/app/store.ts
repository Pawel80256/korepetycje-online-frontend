import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import teacherReducer from "./slices/TeacherSlice";
import authReducer from "./slices/AuthSlice";


export const store = configureStore({
    reducer: {
        teachers: teacherReducer,
        auth: authReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
