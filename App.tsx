import { Todos } from '@/screens/Todos'
import { Home } from '@/screens/Home'
import { RootStackParamList } from '@/types'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerTintColor: '#fff',
            headerBackground() {
              return (
                <View
                  style={{
                    backgroundColor: '#8875FF',
                    flex: 1,
                  }}
                />
              )
            },
          }}
          name="Todos"
          component={Todos}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
