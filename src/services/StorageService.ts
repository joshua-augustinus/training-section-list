import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const storeString = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
        Alert.alert("Failed to save in storage");
    }
}

export const storeData = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
        Alert.alert("Failed to save in storage");
    }
}

export const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return value; //Will be null if not previously saved
    } catch (e) {
        // error reading value
        Alert.alert("Failed to access storage");
    }
}

export const getString = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return value; //Will be null if not previously saved
    } catch (e) {
        // error reading value
        Alert.alert("Failed to access storage");
    }
}