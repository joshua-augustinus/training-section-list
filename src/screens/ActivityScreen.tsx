import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { DrawerActions, NavigationDrawerProp } from 'react-navigation-drawer';


type Props = {
    navigation: NavigationDrawerProp<{ userId: string, routeName: string }>;
}


class ActivityScreen extends React.Component<Props> {
    static navigationOptions = {
        drawerLabel: () => null
    }

    onMenuPress() {
        console.log(this.props.navigation.state);// { key: 'Home', routeName: 'Home' }
        console.log("Menu pressed");
        this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: 50, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center' }}>

                    <TouchableOpacity style={{ backgroundColor: 'yellow' }}
                        onPress={() => this.onMenuPress()}>
                        <Text>Menu</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    <Text>{this.props.navigation.state.routeName}</Text>
                    <TextInput placeholder="Enter text here..."></TextInput>
                </View>
            </SafeAreaView>

        );
    }
}

export { ActivityScreen }