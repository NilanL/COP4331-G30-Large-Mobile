import React from 'react'; 
import * as Font from "expo-font";
import { StyleSheet, Text, View } from 'react-native'; 
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation"; 
import LoginMobile from './screens/LoginMobile';
import RegisterMobile from './screens/RegisterMobile';
import DashboardMobile from './screens/DashboardMobile';
import SliderNativeComponent from 'react-native/Libraries/Components/Slider/SliderNativeComponent';
import AppLoading from 'expo-app-loading';
import ForgotPasswordMobile from './screens/ForgotPasswordMobile';
import DrawerContentComponent from './components/dashboard/DrawerContentComponent';
import WaterMobile from './screens/WaterMobile';
import SleepMobile from './screens/SleepMobile';
import RecreationMobile from './screens/RecreationMobile';
import ExerciseMobile from './screens/ExerciseMobile';
import CustomizationMobile from './screens/CustomizationMobile';

//import { AppLoading } from "expo";
//import './stylesheets/font.css';
//import './App.module.css';
//import CardScreen from './screens/CardScreen'; 

let customFonts = {
    'roboto-regular': require("./assets/fonts/roboto-regular.ttf"),
    'roboto-700': require("./assets/fonts/roboto-700.ttf"),
};

export default class App extends React.Component {

  state = {
    loaded: false
  };

  // Load fonts
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();

    // For Login
    global.username_login = "";
    global.password_login = "";
    global.userId = "";

    // For Register/Dashboard
    global.firstName = "";
    global.lastName = "";
    global.username = "";
    global.password = "";
    global.email = "";
    global.phone = "";

    // For Forgot Password
    global.email_forgot_password = "";

    global.isExerciseTracked = false;
    global.isRecreationTracked = false;
    global.isSleepTracked = false;
    global.isWaterTracked = false;

    // DELETE THIS
    //global.username = "Test";
  }

  render() {
  /*
    while (Font.isLoading('roboto_regular') && Font.isLoading('roboto_700'))
    {}*/

    // App starts
    return <AppContainer />;
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: { 
    screen: DashboardMobile
  },
  Logout: {
    screen: LoginMobile
  },
  WaterHabit: { 
    screen: WaterMobile, 
  },
  SleepHabit: {
    screen: SleepMobile, 
  },
  RecreationHabit: {
    screen: RecreationMobile, 
  },
  ExerciseHabit: {
    screen: ExerciseMobile, 
  },
  Customization: {
    screen: CustomizationMobile,
  }
},{ 
  initialRouteName: "Dashboard",
  drawerPosition: 'right',
  drawerContent: {},
  contentComponent: DrawerContentComponent,
  navigationOptions: {},

  contentOptions: {
    //activeTintColor: '0FA3B1'
  },
  drawerBackgroundColor: '#FFF'
});

// ADD SCREENS HERE
const AppNavigator = createStackNavigator({ 
  Login: { 
    screen: LoginMobile, 
    navigationOptions: { 
      headerShown: false // Will hide header for HomePage 
    } 
  },
  Register: { 
    screen: RegisterMobile, 
    navigationOptions: { 
      headerShown: false // Will hide header for HomePage 
    } 
  },
  ForgotPassword: {
    screen: ForgotPasswordMobile, 
    navigationOptions: { 
      headerShown: false // Will hide header for HomePage 
    } 
  },
  Dashboard: { 
    screen: AppDrawerNavigator, 
    navigationOptions: { 
      headerShown: false // Will hide header for HomePage 
    } 
  },
  WaterHabit: { 
    screen: WaterMobile, 
    navigationOptions: { 
      headerShown: false // Will hide header for HomePage 
    } 
  },
  SleepHabit: {
    screen: SleepMobile, 
    navigationOptions: { 
      headerShown: false // Will hide header for HomePage 
    } 
  },
  RecreationHabit: {
    screen: RecreationMobile, 
    navigationOptions: { 
      headerShown: false // Will hide header for HomePage 
    } 
  },
  ExerciseHabit: {
    screen: ExerciseMobile, 
    navigationOptions: { 
      headerShown: false // Will hide header for HomePage 
    } 
  },
  Customization: {
    screen: CustomizationMobile,
    navigationOptions: {
      headerShown: false // Will hide header for HomePage
    }
  }
},{
  initialRouteName: "Login",
});


const AppContainer = createAppContainer(AppNavigator);