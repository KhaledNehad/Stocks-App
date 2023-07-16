import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { useTheme } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';

import { Feather, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS } from './constants';
import PortfolioScreen from './screens/PortfolioScreen';
import NewsScreen from './screens/NewsScreen';
import MarketsScreen from './screens/MarketsScreen';

export default function App() {
  const Tab = createMaterialBottomTabNavigator();
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transparent';
  const [fontLoaded] = useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
  });
  if (!fontLoaded) return null;

  const portfolioIcon = ({ color }: { color: string }) => (
    <Feather name='pie-chart' size={26} color={color} />
  );

  const marketsIcon = ({ color }: { color: string }) => (
    <Octicons
      name='arrow-switch'
      size={26}
      color={color}
      style={{ transform: [{ rotate: '90deg' }] }}
    />
  );

  const newsIcon = ({ color }: { color: string }) => (
    <MaterialCommunityIcons
      name='application-outline'
      size={26}
      color={color}
    />
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Markets'
        activeColor={COLORS.primaryColor}
        inactiveColor={COLORS.black}
      >
        <Tab.Screen
          name='Portfolio'
          component={PortfolioScreen}
          options={{
            tabBarLabel: 'Portfolio',
            tabBarIcon: portfolioIcon,
          }}
        />
        <Tab.Screen
          name='Markets'
          component={MarketsScreen}
          options={{
            tabBarLabel: 'Markets',
            tabBarIcon: marketsIcon,
          }}
        />

        <Tab.Screen
          name='News'
          component={NewsScreen}
          options={{
            tabBarLabel: 'News',
            tabBarIcon: newsIcon,
          }}
        />
      </Tab.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
