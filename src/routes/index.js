import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SigIn from '../pages/SigIn';
import Welcome from '../pages/Welcome';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='SigIn'
                component={SigIn}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}