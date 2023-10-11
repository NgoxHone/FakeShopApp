import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './Screens/Splash/Splash';
import HomeScreen from './Screens/Home/HomeScreen';
import {RootNavigation} from './Common/RootNavigation';
import TourDetail from './Screens/Tourism/TourDetail';
import GalleryDetail from './Screens/Gallery/GalleryDetail';
import VideoDetail from './Screens/VideoContent/VideoDetail';
import ListSrceen from './Screens/ListSrceen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import News from './Screens/News';
import Notify from './Screens/Notify';
import TabNavigation from './Screens/Home/TabNavigation';

export default function () {
  const [visible, setVisible] = React.useState(false);
  const AppStack = () => {
    const MainStack = createNativeStackNavigator();
    return (
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen name="Home" component={TabNavigation} />
        <MainStack.Screen name="VideoDetail" component={VideoDetail} />
        <MainStack.Screen name="TourDetail" component={TourDetail} />
        <MainStack.Screen name="List" component={ListSrceen} />
        <MainStack.Screen name="Notify" component={Notify} />
      </MainStack.Navigator>
    );
  };
  const SplashScreen = setVisible => {
    const SplashStack = createNativeStackNavigator();
    return (
      <SplashStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <SplashStack.Screen
          name="splash"
          children={props => {
            return <Splash {...props} setVisible={setVisible}></Splash>;
          }}
        />
      </SplashStack.Navigator>
    );
  };
  return (
    <NavigationContainer ref={RootNavigation}>
      {visible ? AppStack() : SplashScreen(setVisible)}
      {/* {AppStack()} */}
    </NavigationContainer>
  );
}
// const HomeScreenS = () => {
//   const Drawer = createDrawerNavigator();
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="HomeScreen" component={HomeScreen} />
//         <Drawer.Screen name="News" component={News} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };
