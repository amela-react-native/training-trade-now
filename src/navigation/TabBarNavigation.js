import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MyStuffActivity from '../screen/change/MyStuffActivity';
import IExChageActivity from '../screen/change/IExChageActivity';
const TabarNavigation = createMaterialTopTabNavigator(
  {
    MyStuff: {
      screen: MyStuffActivity,
    },
    IExChage: {
      screen: IExChageActivity,
    },
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      style: {
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderColor: '#D8D8D8',
      },
      labelStyle: {
        color: 'black',
        fontWeight: 'bold',
      },
      indicatorStyle: {
        borderBottomColor: '#707070',
        borderBottomWidth: 2,
      },
    },
  },
);
const App = createStackNavigator({
  TabarNavigation: {
    screen: TabarNavigation,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(App);
