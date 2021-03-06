import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

export interface ScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
