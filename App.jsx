import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MainScreen } from './screens/MainScreen';
import { GalleryScreen } from './screens/GalleryScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { StyleSheet, View, Text, Image, SafeAreaView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const Tab = createMaterialTopTabNavigator();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            <View style={styles.header}>
                <Image 
                    source={require('./assets/logo.png')} 
                    style={styles.logo} 
                    resizeMode="contain"
                />
                <Text style={styles.headerText}>FirstMobileApp</Text>
            </View>
            <NavigationContainer>
                <Tab.Navigator 
                    initialRouteName="Main"
                    style={styles.navigator}
                    screenOptions={{
                        tabBarActiveTintColor: '#007AFF',
                        tabBarInactiveTintColor: '#8E8E93',
                        tabBarIndicatorStyle: { backgroundColor: '#007AFF' },
                        tabBarLabelStyle: { fontWeight: 'bold' },
                    }}
                > 
                    <Tab.Screen name="Головна" component={MainScreen} />
                    <Tab.Screen name="Галерея" component={GalleryScreen} />
                    <Tab.Screen name="Профіль" component={ProfileScreen} /> 
                </Tab.Navigator>
            </NavigationContainer>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Глушко Олег Артурович, ІПЗ-23-3</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    logo: {
        width: 40,
        height: 40,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    navigator: {
        flex: 1,
    },
    footer: {
        padding: 5,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e1e1e1',
    },
    footerText: {
        fontSize: 12,
        color: '#666',
    }
});




