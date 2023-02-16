import { View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProductScreen from '../Screens/ProductScreen'
import WishList from '../Screens/WishList'
import Ionicons from "react-native-vector-icons/Ionicons"
import Header from '../components/Header'
import CartScreen from '../Screens/CartScreen'
import { createStackNavigator } from '@react-navigation/stack'
import ImageCom from '../components/Image'


const NavContainer = () => {

    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='TabNav' component={TabNavContainer} />
                <Stack.Screen name='CartScreen' component={CartScreen} options={{
                    headerShadowVisible: false,
                    headerShown: true,
                    headerBackTitleVisible: true,
                    headerBackTitle: "back",
                }} />
                <Stack.Screen name='Image' component={ImageCom} options={{ headerShown: true }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


const TabNavContainer = () => {

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            header: () => <Header title="SwiftCart" />,
            tabBarStyle: {
                height: 70,
                marginBottom: 10,
                marginHorizontal: 10,
                borderRadius: 25
            },
            tabBarActiveTintColor: "black",
            tabBarLabelStyle: {
                fontSize: 13,
                marginBottom: 5,
                color: "black",
                fontWeight: "500"
            },
            tabBarIcon: ({ focused }) => {
                let icon;

                if (route.name === "ProductScreen") {
                    icon = focused ? "home" : "home-outline"
                } else if (route.name === "WishList") {
                    icon = focused ? "heart-sharp" : "heart-outline"
                }
                return (
                    <View style={{
                        backgroundColor: focused ? "lightblue" : "white",
                        paddingVertical: 7,
                        borderRadius: 15,
                        marginTop: 5,
                    }}>
                        <Ionicons name={icon} size={23} color={"black"} />
                    </View>
                )
            }
        })}>
            <Tab.Screen name='ProductScreen' component={ProductScreen} options={{
                title: "Home",
            }} />
            <Tab.Screen name='WishList' component={WishList} />
            {/* <Tab.Screen name='Image' component={ImageCom}/> */}
        </Tab.Navigator>
    )
}


export default NavContainer
