import React from 'react'
import {
  Image
} from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// Screens
import { Home } from '../screens/'

import { COLORS, icons } from '../constants/'

const Tab = createBottomTabNavigator()

const tabOptions = {
  showLabel: false,
  style: {
    height: '10%',
    backgroundColor: COLORS.black
  }
}

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.white : COLORS.gray

          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.dashboard}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: tintColor
                  }}
                />
              )
            case 'Search':
              return (
                <Image
                  source={icons.search}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: tintColor
                  }}
                />
              )
            case 'Notification':
              return (
                <Image
                  source={icons.notification}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: tintColor
                  }}
                />
              )
            case 'Setting':
              return (
                <Image
                  source={icons.menu}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: tintColor
                  }}
                />
              )
          }
        }
      })}
    >
      <Tab.Screen
        name='Home'
        component={Home}
      />
      <Tab.Screen
        name='Search'
        component={Home}
      />
      <Tab.Screen
        name='Notification'
        component={Home}
      />
      <Tab.Screen
        name='Setting'
        component={Home}
      />
    </Tab.Navigator>
  )
}

export default Tabs