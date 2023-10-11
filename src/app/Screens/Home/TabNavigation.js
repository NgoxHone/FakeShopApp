import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MAX_H, MAX_W} from '../../Common/GlobalStyles';
import HomeSrceen from './HomeSrceen';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({focused}) => (
            <View
              style={
                {
                  // padding: 5,
                  // backgroundColor: focused ? '#eeeeee' : null,
                  // borderRadius: 15,
                  // backgroundColor: 'red',
                  // borderTopWidth: 1,
                  // borderTopLeftRadius: 30,
                }
              }>
              {/* <Text>{item.Text}</Text> */}
              <Image
                resizeMode="contain"
                // source={require('../../../asset/Icons/home.png')}
                source={{
                  uri: focused
                    ? 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
                    : 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg',
                }}
                style={{
                  width: focused ? 35 : 30,
                  height: focused ? 35 : 30,
                  // paddingTop: 15,
                  // tintColor: focused ? 'blue' : 'black',
                }}
              />
            </View>
          ),
        }}
        name="HomeNavigation"
        component={HomeSrceen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Sự kiện',
          tabBarIcon: ({focused}) => (
            <View
              style={
                {
                  // padding: 5,
                  // backgroundColor: focused ? '#eeeeee' : null,
                  // borderRadius: 15,
                  // backgroundColor: 'red',
                  // borderTopWidth: 1,
                  // borderTopLeftRadius: 30,
                }
              }>
              {/* <Text>{item.Text}</Text> */}
              <Image
                resizeMode="contain"
                // source={require('../../../asset/Icons/home.png')}
                source={{
                  uri: focused
                    ? 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
                    : 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg',
                }}
                style={{
                  width: focused ? 35 : 30,
                  height: focused ? 35 : 30,
                  // paddingTop: 15,
                  // tintColor: focused ? 'blue' : 'black',
                }}
              />
            </View>
          ),
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
