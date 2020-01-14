import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import ListFollower from '../screen/listFriends/ListFollower';
import ListFollowing from '../screen/listFriends/ListFollowing';
const TabBarListFriends = createMaterialTopTabNavigator(
  {
    Followers: {
      screen: ListFollower,
    },
    Following: {
      screen: ListFollowing,
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

export default createAppContainer(TabBarListFriends);
