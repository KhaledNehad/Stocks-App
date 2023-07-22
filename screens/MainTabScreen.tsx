import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Feather, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

import PortfolioScreen from './PortfolioScreen';
import NewsScreen from './NewsScreen';
import MarketsScreen from './MarketsScreen';
import { COLORS } from '../constants';
const Tab = createMaterialBottomTabNavigator();
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



const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName='Markets'
    activeColor={COLORS.primaryColor}
    barStyle={{ backgroundColor: 'white'}}>
    
    <Tab.Screen
      name='Portfolio'
      component={PortfolioScreen}
      options={{
        tabBarLabel: 'Portfolio',
        tabBarColor: COLORS.black,
        tabBarIcon: portfolioIcon
      }} />
    
    <Tab.Screen
      name='Markets'
      component={MarketsScreen}
      options={{
        tabBarLabel: 'Markets',
        tabBarColor: COLORS.black,
        tabBarIcon: marketsIcon
      }} />
    
    <Tab.Screen
      name='News'
      component={NewsScreen}
      options={{
        tabBarLabel: 'News',
        tabBarColor: COLORS.black,
        tabBarIcon: newsIcon
      }} />


    </Tab.Navigator>
)

export default MainTabScreen

