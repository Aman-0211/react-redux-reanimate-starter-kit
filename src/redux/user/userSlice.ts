    // userSlice.ts
    import { createSlice, PayloadAction } from '@reduxjs/toolkit';

    interface UserState {
      name: string;
      age: number;
    }

    const initialState: UserState = {
      name: '',
      age: 0,
    };

    const userSlice = createSlice({
      name: 'user',
      initialState,
      reducers: {
        setName: (state, action: PayloadAction<string>) => {
          state.name = action.payload;
        },
        setAge: (state, action: PayloadAction<number>) => {
          state.age = action.payload;
        },
      },
    });

    export const { setName, setAge } = userSlice.actions;
    export default userSlice.reducer;