import React from 'react';
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
      ExChange: {
        screen: ExChangeActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="search" size={24} color={tintColor} />
          ),
        },
      },
      Message: {
        screen: MessageActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="plus-circle" size={24} color={tintColor} />
          ),
        },
      },
      Notification: {
        screen: NotificationActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="heart" size={24} color={tintColor} />
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
    Auth: AppNavigation,
    BottomNavigation: BottomNavigation,
  }),
);