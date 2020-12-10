import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import PropScreen from "./src/screens/PropScreen";
import StateScreen from "./src/screens/StateScreen";
import ReducerScreen from "./src/screens/ReducerScreen";
import TextInputScreen from "./src/screens/TextInputScreen";
import AktieScreen from "./src/screens/AktieScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
    Image: PropScreen,
    State: StateScreen,
    Reducer: ReducerScreen,
    TextInput: TextInputScreen,
    Aktier: AktieScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
