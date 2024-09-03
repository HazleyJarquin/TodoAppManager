import React from 'react'
import { Todos } from '@/screens/Todos'
import { Home } from '@/screens/Home'
import { RootStackParamList, TodosProps } from '@/types'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { Users } from '@/screens/Users'
import { SplashScreen } from '@/screens/SplashScreen'
const Stack = createNativeStackNavigator<RootStackParamList>()

export default function Routers() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="SplashScreen"
          options={{ headerShown: false }}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="Todos"
          options={{ headerShown: false }}
          component={Todos}
        />
        <Stack.Screen
          name="Users"
          options={{ headerShown: false }}
          component={Users}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
