// ReactotronConfig.ts
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

export const reactotron = Reactotron
  .configure({ name: 'MyApp' })
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();

if (__DEV__) {
  console.tron = reactotron;
}
