import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps101465Navigator from '../features/Maps101465/navigator';
import Add-Item101464Navigator from '../features/Add-Item101464/navigator';
import UserProfile101456Navigator from '../features/UserProfile101456/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps101465: { screen: Maps101465Navigator },
Add-Item101464: { screen: Add-Item101464Navigator },
UserProfile101456: { screen: UserProfile101456Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
