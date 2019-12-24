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

// Login and Register
import LoginActivity from '../screen/regiterandlogin/LoginActivity';
import RegisterActivity from '../screen/regiterandlogin/RegisterActivity';

// Splash
import SplashActivity from '../screen/splash/SplashActivity';

// Profile
import EditProfileActivity from '../screen/profile/EditProfileActivity';
import IconProvider from '../components/IconProvider';
import ThongtinProfile from '../screen/profile/ThongtinProfileActivity';

// More Acitivity
import MoreActivity from '../screen/more/MoreActivity';

// Setting Activity
import SetingActivity from '../screen/setting/SettingActivity';
const BottomNavigation = createStackNavigator(
  {
    default: createBottomTabNavigator({
      More: {
        screen: MoreActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="bars" size={24} color={tintColor} />
          ),
        },
      },
      Home: {
        screen: HomeActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="home" size={24} color={tintColor} />
          ),
        },
      },
      ExChange: {
        screen: ExChangeActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="search" size={24} color={tintColor} />
          ),
        },
      },
      Trade: {
        screen: MessageActivity,
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
    }),
  },
  {
    headerMode: 'none',
  },
);

const AppNavigation = createStackNavigator({
  SplashActivity: {
    screen: SplashActivity,
    navigationOptions: () => ({
      header: null,
    }),
  },
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
});

export default createAppContainer(
  createSwitchNavigator({
    BottomNavigation: BottomNavigation,
    Auth: AppNavigation,
    EditProfile: {
      screen: EditProfileActivity,
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
  }),
);
