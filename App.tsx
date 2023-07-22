import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { useTheme } from 'react-native-paper'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import MainTabScreen from './screens/MainTabScreen'
import DrawerContent from './screens/DrawerContent'
import { COLORS } from './constants'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const DotsMenuIcon = () => {
  return (
    <MaterialCommunityIcons
      name="dots-vertical"
      size={24}
      color={COLORS.white}
      style={{ marginRight: 20 }}
    />
  )
}

const DrawerContentComponent = (props: any) => {
  return <DrawerContent {...props} />
}

export default function App() {
  const Drawer = createDrawerNavigator()
  const theme = useTheme()
  theme.colors.secondaryContainer = 'transparent'
  const [fontLoaded] = useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
  })
  if (!fontLoaded) return null

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={DrawerContentComponent}>
        <Drawer.Screen
          name="Home"
          component={MainTabScreen}
          options={{
            headerTintColor: COLORS.white,
            headerTitle: '',
            headerStyle: {
              backgroundColor: COLORS.primaryColor,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontFamily: 'InterBold',
            },
            headerRight: DotsMenuIcon,
          }}
        />
      </Drawer.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  )
}
