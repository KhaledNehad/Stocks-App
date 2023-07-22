import { View, StyleSheet } from 'react-native'
import React from 'react'
import {
    Avatar,
    Title,
    Caption,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FONTS, SIZES } from '../constants';

const DrawerContent = (props:any) => {

  return (
   <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri:'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1380&t=st=1690017166~exp=1690017766~hmac=41dd4af000b238e10e4458f1795c433bef60146ab0a8e4d4712944b586578142'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Khaled Nehad</Title>
                                <Caption style={styles.caption}>@Khaled_NH</Caption>
                            </View>
                        </View>

                              
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name='home-outline'
                  color={color}
                  size={size}
                />
              )}
              label='Home'
              onPress={() => { props.navigation.navigate('Home') }}
            />
            
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
  )
}

export default DrawerContent

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      marginTop: 3,
      fontFamily: FONTS.bold,
      fontSize: SIZES.large,
      
    },
    caption: {
      fontSize: SIZES.medium,
      fontFamily:FONTS.regular

    },
    drawerSection: {
      marginTop: 10,
    },
  });