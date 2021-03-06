import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { BookDetail } from './src/screens/'
import Tabs from './src/navigation/tabs'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'Transparent'
  }
}

const Stack = createStackNavigator()

const App = () => {

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='Home'
      >
        {/* Tabs */}
        <Stack.Screen
          name='Home'
          component={Tabs}
        />
        {/* Screens */}
        <Stack.Screen
          name='BookDetail'
          component={BookDetail}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return <App />
}