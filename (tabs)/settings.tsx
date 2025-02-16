import { View, Text, ScrollView, Switch, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function SettingsScreen() {
  const [settings, setSettings] = useState({
    downloadOverWifi: true,
    backgroundDownloads: true,
    autoPlayback: false,
    saveToGallery: true,
    notifications: true,
  });

  const toggleSetting = (key: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Download Settings</Text>
          
          <View style={styles.setting}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Download over Wi-Fi only</Text>
              <Text style={styles.settingDescription}>Save mobile data by downloading only on Wi-Fi</Text>
            </View>
            <Switch
              value={settings.downloadOverWifi}
              onValueChange={() => toggleSetting('downloadOverWifi')}
              trackColor={{ false: '#d1d5db', true: '#818cf8' }}
              thumbColor={settings.downloadOverWifi ? '#6366f1' : '#f3f4f6'}
            />
          </View>

          <View style={styles.setting}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Background downloads</Text>
              <Text style={styles.settingDescription}>Continue downloading when app is in background</Text>
            </View>
            <Switch
              value={settings.backgroundDownloads}
              onValueChange={() => toggleSetting('backgroundDownloads')}
              trackColor={{ false: '#d1d5db', true: '#818cf8' }}
              thumbColor={settings.backgroundDownloads ? '#6366f1' : '#f3f4f6'}
            />
          </View>

          <View style={styles.setting}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Save to gallery</Text>
              <Text style={styles.settingDescription}>Automatically save downloaded videos to gallery</Text>
            </View>
            <Switch
              value={settings.saveToGallery}
              onValueChange={() => toggleSetting('saveToGallery')}
              trackColor={{ false: '#d1d5db', true: '#818cf8' }}
              thumbColor={settings.saveToGallery ? '#6366f1' : '#f3f4f6'}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Playback Settings</Text>
          
          <View style={styles.setting}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Auto-playback</Text>
              <Text style={styles.settingDescription}>Automatically play videos when opened</Text>
            </View>
            <Switch
              value={settings.autoPlayback}
              onValueChange={() => toggleSetting('autoPlayback')}
              trackColor={{ false: '#d1d5db', true: '#818cf8' }}
              thumbColor={settings.autoPlayback ? '#6366f1' : '#f3f4f6'}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          
          <View style={styles.setting}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Download notifications</Text>
              <Text style={styles.settingDescription}>Get notified about download status</Text>
            </View>
            <Switch
              value={settings.notifications}
              onValueChange={() => toggleSetting('notifications')}
              trackColor={{ false: '#d1d5db', true: '#818cf8' }}
              thumbColor={settings.notifications ? '#6366f1' : '#f3f4f6'}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.dangerButton}>
          <Ionicons name="trash-outline" size={20} color="#ef4444" />
          <Text style={styles.dangerButtonText}>Clear Download History</Text>
        </TouchableOpacity>

        <View style={styles.about}>
          <Text style={styles.version}>Version 1.0.0</Text>
          <Text style={styles.copyright}>© 2025 Grape DL. All rights reserved.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#6366f1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
  },
  section: {
    backgroundColor: 'white',
    marginTop: 16,
    paddingVertical: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#e5e7eb',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6366f1',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#e5e7eb',
  },
  settingInfo: {
    flex: 1,
    marginRight: 16,
  },
  settingTitle: {
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: '#6b7280',
  },
  dangerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fee2e2',
    marginHorizontal: 16,
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
  },
  dangerButtonText: {
    color: '#ef4444',
    fontWeight: '600',
    marginLeft: 8,
  },
  about: {
    alignItems: 'center',
    padding: 24,
  },
  version: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  copyright: {
    fontSize: 12,
    color: '#9ca3af',
  },
});