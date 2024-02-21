import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Launch from "../components/LaunchScreen/Launch";
import { LoginScreen } from "../components/loginScreen/LoginScreen";
import { EnterSmsScreen } from "../components/SMSScreen/EnterSmsScreen";
import Dashbord from "../components/Dashboard/Dashbord";


function Navigation(){
    const Stack = createNativeStackNavigator();
    return ( 
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LauncheScreen" component={Launch} options={{headerShown: false}}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="EnterSmsScreen" component={EnterSmsScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Dashbord" component={Dashbord} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
