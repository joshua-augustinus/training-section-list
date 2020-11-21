import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { SideMenu } from './components/SideMenu';
import { ActivityScreen } from './screens/ActivityScreen';
import { MasterScreen } from './screens/MasterScreen';
import { createStackNavigator } from 'react-navigation-stack';



const InnerStack = createStackNavigator({
    Stack1: {
        screen: MasterScreen
    }
})

const RootStack = createDrawerNavigator({
    Home: {
        screen: InnerStack
    },
    SecondScreen: {
        screen: InnerStack
    },
    Activity: {
        screen: ActivityScreen
    }
}, {
    contentComponent: SideMenu,
    backBehavior: "initialRoute"
});
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export { AppContainer };