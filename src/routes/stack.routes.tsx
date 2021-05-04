import React from 'react';
import colors from '../styles/colors';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../pages/Welcome';
import { Useridentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            },
        }}
    >
        <stackRoutes.Screen
            name="Welcome"
            component={Welcome}
        />

        <stackRoutes.Screen
            name="User"
            component={Useridentification}
        />

        <stackRoutes.Screen
            name="Confirmation"
            component={Confirmation}
        />
    </stackRoutes.Navigator>    
)
export default AppRoutes