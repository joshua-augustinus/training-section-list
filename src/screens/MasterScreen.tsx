import React, { useEffect, useRef, useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, BackHandler, SectionList, StyleSheet, Animated } from 'react-native';
import { SafeAreaView, StackActions } from 'react-navigation';
import { DrawerActions, NavigationDrawerProp } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Entypo';
import { FlatList } from 'react-native-gesture-handler';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    navigation: NavigationDrawerProp<{ userId: string, routeName: string }>;
}


const DATA = [
    {
        title: "Main dishes",
    }
];

const yPositions = [];

interface ItemProps {
    title: string,
    onPress: () => void,
    index: number
}


const POSITION_BOTTOM = 1;

const MasterScreen = (props: Props) => {
    const [data, setData] = useState(DATA);
    const dynamicValue = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef<any>(null);
    const yRef = useRef(0);

    useEffect(() => {
        dynamicValue.addListener(({ value }) => {
            const params = {
                animated: false,
                offset: value,
            }
            flatListRef.current.scrollToOffset(params)
        });
    }, []);

    useEffect(() => {
        Animated.timing(dynamicValue, {
            toValue: 1000,
            duration: 3000,
            useNativeDriver: true,
            delay: 100
        }).start();

    }, []);


    const Item = React.useCallback((props: ItemProps) => (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.item} onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                console.log(layout);
                yPositions[props.index] = layout;
            }}>
                <Text style={styles.title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </View>
        </TouchableOpacity>

    ), []);

    const onButtonPress = React.useCallback(() => {
        const newMessage = [{
            title: "Desserts",
        }]
        const newData = data.concat(newMessage);
        setData(newData);

        setTimeout(() => {
            let totalHeight = 0;
            for (let i = 0; i < yPositions.length - 1; i++) {
                totalHeight += yPositions[i].height;
            }


            const ani1 = Animated.timing(dynamicValue, {
                toValue: yRef.current,
                duration: 0,
                useNativeDriver: true,
                delay: 0
            })

            const ani2 = Animated.timing(dynamicValue, {
                toValue: totalHeight,
                duration: 600,
                useNativeDriver: true,
                delay: 0
            });

            Animated.sequence([ani1, ani2]).start()
        }, 500);



    }, [data]);

    const onScroll = ({ nativeEvent }) => {
        yRef.current = nativeEvent.contentOffset.y;
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList ref={flatListRef} inverted={false} onScroll={onScroll}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => <Item index={index} title={item.title} onPress={onButtonPress} />}

            />
        </SafeAreaView>

    );

}

MasterScreen.navigationOptions = {}

export { MasterScreen }

const styles = StyleSheet.create({

    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    }
});
