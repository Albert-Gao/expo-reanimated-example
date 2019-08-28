import { createStackNavigator, createAppContainer } from "react-navigation";
import { Screen1 } from "./screens/Screen1/Screen1";
import { Screen2 } from "./screens/Screen2/Screen2";
import { Screen3 } from "./screens/Screen3/Screen3";
import { Screen4 } from "./screens/Screen4/Screen4";
import { ROUTES } from "./constants";

const AppNavigator = createStackNavigator(
  {
    [ROUTES.Screen1]: {
      screen: Screen1,
      navigationOptions: {
        title: "Knowing yourself",
        headerBackTitle: "Home",
        headerTruncatedBackTitle: "Home"
      }
    },
    [ROUTES.Screen2]: {
      screen: Screen2,
      navigationOptions: {
        title: "My gambling triggers"
      }
    },
    [ROUTES.Screen3]: {
      screen: Screen3,
      navigationOptions: {
        title: "My gambling triggers"
      }
    },
    [ROUTES.Screen4]: {
      screen: Screen4,
      navigationOptions: {
        title: "My gambling triggers"
      }
    }
  },
  {
    initialRouteName: "Screen1",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black"
      },
      headerTitleStyle: {
        color: "white"
      }
    }
  }
);

export const AppWithStackNavigator = createAppContainer(AppNavigator);
