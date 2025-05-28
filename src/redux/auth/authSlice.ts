    // features/auth/authSlice.ts
    import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthResponse, AuthState, ILoginPayload } from './type';
    
    
    
    const initialState: AuthState = {
      token: null,
      loading: false,
      error: null,
    };
    
    const authSlice = createSlice({
      name: 'auth',
      initialState,
      reducers: {
        loginRequest: (state, action: PayloadAction<ILoginPayload>) => {
          console.log('Login request payload:', action.payload);
          
          state.loading = true;
          state.error = null;
        },
        loginSuccess: (state, action: PayloadAction<AuthResponse>) => {
          state.loading = false;
          state.token = action.payload.accessToken;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.error = action.payload;
        },
        logout: (state) => {
          state.token = null;
          state.error = null;
        },
      },
    });
    
    export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;
    export default authSlice.reducer;