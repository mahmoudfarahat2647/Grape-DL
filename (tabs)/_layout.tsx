import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Platform, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          ...Platform.select({
            ios: {
              backgroundColor: 'transparent',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
            },
            android: {
              backgroundColor: '#ffffff',
              elevation: 8,
            },
            web: {
              backgroundColor: '#ffffff',
              borderTopWidth: StyleSheet.hairlineWidth,
              borderTopColor: '#e5e5e5',
            },
          }),
        },
        tabBarBackground: Platform.OS === 'ios' ? () => (
          <BlurView
            tint="light"
            intensity={95}
            style={StyleSheet.absoluteFill}
          />
        ) : undefined,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="downloads"
        options={{
          title: 'Downloads',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="download" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}