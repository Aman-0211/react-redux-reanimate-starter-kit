import { createNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigationTypes'; // adjust path to match yours

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName]
) {
  if (navigationRef.isReady()) {
    if (params !== undefined) {
        // @ts-ignore
      navigationRef.navigate(name, params); // ✅ with params
    } else {
        // @ts-ignore
      navigationRef.navigate(name); // ✅ without params
    }
  }
}
