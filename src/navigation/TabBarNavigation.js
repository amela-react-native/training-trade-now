import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import MyStuffActivity from '../screen/change/MyStuffActivity';
import IExChageActivity from '../screen/change/IExChageActivity';
const TabarNavigation = createMaterialTopTabNavigator({
  MyStuff: {
    screen: MyStuffActivity,
  },
  IExChage: {
    screen: IExChageActivity,
  },
});

export default createAppContainer(TabarNavigation);
