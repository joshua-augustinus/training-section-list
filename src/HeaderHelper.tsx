import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { NavigationOptions } from '@src/types';


export const getNavigationOptions = (navigation): NavigationOptions => {
    return {

        // Navigation bar style
        headerStyle: styles.navBar,
        // Navbar left items
        headerLeft: () => (
            <View style={styles.navLeft}>
                <Text>Left placeholder</Text>
            </View >
        )

        ,
        // Navbar right items
        headerRight: () => (
            <View style={styles.navRight}>
                <Text>Right placeholder</Text>
            </View>
        )

        ,
        headerTitle: ''
    };
}

export const getEmptyNavigationOptions = (navigation) => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    navRight: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    navBar: {
        elevation: 0, // Remove bottom shadow on Android
        shadowOpacity: 0, // Remove bottom shadow on iOS
        borderBottomWidth: 1,
        borderBottomColor: '#E7E7E7',
        backgroundColor: 'red',
        height: 52
    }
});