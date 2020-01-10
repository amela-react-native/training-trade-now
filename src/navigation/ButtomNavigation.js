import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Screen
import HomeActivity from '../screen/home/HomeActivity';
import ExChangeActivity from '../screen/change/ExChangeActivity';
import NotificationActivity from '../screen/notifications/NotificationActivity';
import MessageActivity from '../screen/message/MessageActivity';
import ProfileActivity from '../screen/profile/ProfileActivity';
import SearchActivity from '../screen/search/SearchActivity';

// Login and Register
import LoginActivity from '../screen/regiterandlogin/login/LoginActivity';
import RegisterActivity from '../screen/regiterandlogin/register/RegisterActivity';

// Splash
import SplashActivity from '../screen/splash/SplashActivity';

// Profile
import EditProfileActivity from '../screen/profile/EditProfileActivity';
import ThongtinProfile from '../screen/profile/ThongtinProfileActivity';

// More Acitivity
import MoreActivity from '../screen/more/MoreActivity';

// Setting Activity
import SetingActivity from '../screen/setting/SettingActivity';

// Category Activity
import CategoryActivity from '../screen/category/CategoryActivity';
import DetailCategory from '../screen/category/DetailCategory';
import AddCategory from '../screen/category/AddCategory';

// Detail Activity
import DetailListSanPham from '../screen/details/DetailListSanPham';

// UserOther Activity
import ProfileUserOther from '../screen//profileUserOther/ProfileUserOther';
import DetailSwiperImage from '../screen/listItem/DetailSwiperImage';
// Messagge
import DetailMessage from '../screen/message/DetailMessage';

// Select SanPham
import DetailSelectSanPham from '../screen/details/DetailSeclectSanPham';
const BottomNavigation = createStackNavigator(
  {
    default: createBottomTabNavigator({
      Home: {
        screen: HomeActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="home" size={24} color={tintColor} />
          ),
        },
      },
      Search: {
        screen: SearchActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="search" size={24} color={tintColor} />
          ),
        },
      },
      Trade: {
        screen: ExChangeActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="plus-circle" size={24} color={tintColor} />
          ),
        },
      },
      Profile: {
        screen: ProfileActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="user" size={24} color={tintColor} />
          ),
        },
      },
      More: {
        screen: MoreActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="bars" size={24} color={tintColor} />
          ),
        },
      },
    }),
  },
  {
    headerMode: 'none',
  },
);

const AppNavigation = createStackNavigator({
  Login: {
    screen: LoginActivity,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Register: {
    screen: RegisterActivity,
    navigationOptions: () => ({
      header: null,
    }),
  },
  SplashActivity: {
    screen: SplashActivity,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

export default createAppContainer(
  createStackNavigator({
    BottomNavigation: {
      screen: BottomNavigation,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Message: {
      screen: MessageActivity,
      navigationOptions: () => ({
        header: null,
      }),
    },
    ProfileUserOther: {
      screen: ProfileUserOther,
      navigationOptions: () => ({
        header: null,
      }),
    },
    DetailListSanPham: {
      screen: DetailListSanPham,
      navigationOptions: () => ({
        header: null,
      }),
    },
    EditProfile: {
      screen: EditProfileActivity,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Auth: {
      screen: AppNavigation,
      navigationOptions: () => ({
        header: null,
      }),
    },
    AddCategory: {
      screen: AddCategory,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Category: {
      screen: CategoryActivity,
      navigationOptions: () => ({
        header: null,
      }),
    },
    ThongtinProfile: {
      screen: ThongtinProfile,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Setings: {
      screen: SetingActivity,
      navigationOptions: () => ({
        header: null,
      }),
    },
    DetailCategory: {
      screen: DetailCategory,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Notification: {
      screen: NotificationActivity,
      navigationOptions: () => ({
        header: null,
      }),
    },
    DetailSwiperImage: {
      screen: DetailSwiperImage,
      navigationOptions: () => ({
        header: null,
      }),
    },
    DetailMessage: {
      screen: DetailMessage,
      navigationOptions: () => ({
        header: null,
      }),
    },
    DetailSelectSanPham: {
      screen: DetailSelectSanPham,
      navigationOptions: () => ({
        header: null,
      }),
    },
  }),
);
