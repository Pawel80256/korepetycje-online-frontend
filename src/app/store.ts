import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import teacherReducer from "./slices/TeacherSlice";


export const store = configureStore({
    reducer: {
        teachers: teacherReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
