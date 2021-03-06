import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen, { screenOptions as dashboardScreenOptions } from '../screens/DashboardScreen';
import WorkoutScreen, { screenOptions as workoutScreenOptions } from '../screens/WorkoutScreen';
import ExerciseScreen, { screenOptions as exerciseScreenOptions } from '../screens/ExerciseScreen';
import AuthScreen, { screenOptions as authScreenOptions } from '../screens/user/AuthScreen';
import HomeWorkoutScreen, { screenOptions as homeWorkoutScreenOptions } from '../screens/HomeWorkoutScreen';
import HomeWorkoutlogScreen, { screenOptions as homeWorkoutlogScreenOptions } from '../screens/HomeWorkoutlogScreen';
import NotesScreen from '../screens/NotesScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/colors';
import HomeScreen, { screenOptions as homeScreenOptions } from '../screens/HomeScreen';
import Planner from '../screens/Planner';
import Profile from '../screens/ProfileScreen';
import AwardsScreen from '../screens/AwardsScreen';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: '#343a40'
    },
    headerTintColor: 'bisque'
};

const AwardsStackNavigator = createStackNavigator();
const AwardsNavigator = () => {
    return <AwardsStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
        <AwardsStackNavigator.Screen name='Awards' component={AwardsScreen} />
    </AwardsStackNavigator.Navigator>
};

const NotesStackNavigator = createStackNavigator();
const NotesNavigator = () => {
    return <NotesStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
        <NotesStackNavigator.Screen name='Notes' component={NotesScreen} />
    </NotesStackNavigator.Navigator>
};

const TopTab = createMaterialTopTabNavigator();
const ExerciseTabNavigator = () => {
    return <TopTab.Navigator
        tabBarOptions={{
            activeTintColor: Colors.headerFontColor,
            inactiveTintColor: Colors.buttonColor,
            style: { backgroundColor: Colors.headerBackground },
            indicatorStyle: { backgroundColor: Colors.headerFontColor }
        }}
    >
        <TopTab.Screen name='Exercise' component={ExerciseScreen} />
        {/* <TopTab.Screen name='Notes' component={NotesNavigator}/> */}
        <TopTab.Screen name='Awards' component={AwardsNavigator} />
    </TopTab.Navigator>
}

const DashboardStackNavigator = createStackNavigator();
const DashboardNavigator = () => {
    return <DashboardStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
        <DashboardStackNavigator.Screen name='Dashboard' component={DashboardScreen} options={dashboardScreenOptions} />
        <DashboardStackNavigator.Screen name='Workout' component={WorkoutScreen} options={workoutScreenOptions} />
        <DashboardStackNavigator.Screen name='ExerciseScreen' component={ExerciseTabNavigator} options={exerciseScreenOptions} />
    </DashboardStackNavigator.Navigator>
};

const HomeWorkoutStackNavigator = createStackNavigator();
const HomeWorkoutNavigator = () => {
    return <HomeWorkoutStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
        <HomeWorkoutStackNavigator.Screen name='HomeWorkout' component={HomeWorkoutScreen} options={homeWorkoutScreenOptions} />
        <HomeWorkoutStackNavigator.Screen name='HomeWorkoutlog' component={HomeWorkoutlogScreen} options={homeWorkoutlogScreenOptions} />
    </HomeWorkoutStackNavigator.Navigator>
}

const HomeStackNavigator = createStackNavigator();
const HomeNavigator = () => {
    return <HomeStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
        <HomeStackNavigator.Screen name='Home' component={HomeScreen} options={homeScreenOptions} />
    </HomeStackNavigator.Navigator>
};

const PlannerStackNavigator = createStackNavigator();
const PlannerNavigator = () => {
    return <PlannerStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
        <PlannerStackNavigator.Screen name='Planner' component={Planner} />
    </PlannerStackNavigator.Navigator>
};

const ProfileStackNavigator = createStackNavigator();
const ProfileNavigator = () => {
    return <ProfileStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
        <ProfileStackNavigator.Screen name='Profile' component={Profile} />
    </ProfileStackNavigator.Navigator>
};

const AuthStackNavigator = createStackNavigator();
export const AuthNavigator = () => {
    return <AuthStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
        <AuthStackNavigator.Screen name='Auth' component={AuthScreen} options={authScreenOptions} />
    </AuthStackNavigator.Navigator>
};

const Tab = createBottomTabNavigator();
export const FitbookNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return <Icon name="home" size={25} color={color} />
                    } else if (route.name === 'Resistance') {
                        return <Icon name="dumbbell" size={25} color={color} />
                    } else if (route.name === 'Workouts') {
                        return <Icon name="dumbbell" size={25} color={color} />
                    } else if (route.name === 'Awards') {
                        return <Icon name="trophy" size={25} color={color} />
                    } else if (route.name === 'Profile') {
                        return <Icon name="settings" size={24} color={color} />
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: Colors.headerFontColor,
                inactiveTintColor: Colors.buttonColor,
                style: { backgroundColor: Colors.headerBackground },
                safeAreaInset: { bottom: 'never', top: 'never' }
            }}
        >
            <Tab.Screen name="Home" component={HomeNavigator} />
            <Tab.Screen name="Resistance" component={HomeWorkoutNavigator} />
            <Tab.Screen name="Workouts" component={DashboardNavigator} />
            <Tab.Screen name="Awards" component={AwardsNavigator} />
            <Tab.Screen name="Profile" component={ProfileNavigator} />
        </Tab.Navigator>
    );
}