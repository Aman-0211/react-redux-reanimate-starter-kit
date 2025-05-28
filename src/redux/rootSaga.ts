    // rootSaga.ts
    import { all, fork } from 'redux-saga/effects';
    import watchLogin from './auth/authSaga';
    
    function* rootSaga() {
      yield all([fork(watchLogin)]);
    }
    
    export default rootSaga;