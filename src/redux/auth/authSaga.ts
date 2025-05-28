    // features/auth/authSaga.ts
    import { takeLatest, call, put } from 'redux-saga/effects';
    import { loginRequest, loginSuccess, loginFailure } from './authSlice';
    import { login } from '../../api/auth'; // Adjust the import path as necessary
    import { AuthResponse } from './type';
    import { storage } from '../../utils/storage';

    // Async function to save data to AsyncStorage
    const saveAuthDataToStorage = async (data: AuthResponse) => {
    try {
        await storage.setAccessToken(data.accessToken);
        await storage.setIsAuthenticated(true);
    } catch (e) {
        console.error('Failed to save auth data:', e);
        throw e;
    }
    };
    
    function* handleLogin(action: ReturnType<typeof loginRequest>) {
      try {
        const res: AuthResponse = yield call(login, action.payload);
        yield call(saveAuthDataToStorage, res);
        yield put(loginSuccess(res));
      } catch (error: any) {
        yield put(loginFailure(error.message));
      }
    }
    
    function*   watchLogin() {
        console.log("Watching for login requests...");
        
      yield takeLatest(loginRequest.type, handleLogin);
    }
    
    export default watchLogin;