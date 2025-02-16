import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const [url, setUrl] = useState('');

  const handleDownload = () => {
    // TODO: Implement download logic
    console.log('Download URL:', url);
  };

  const handlePaste = async () => {
    if (Platform.OS === 'web') {
      try {
        const text = await navigator.clipboard.readText();
        setUrl(text);
      } catch (err) {
        console.error('Failed to read clipboard:', err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6366f1', '#8b5cf6']}
        style={styles.header}
      >
        <Text style={styles.title}>Grape DL</Text>
        <Text style={styles.subtitle}>Download videos from anywhere</Text>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Paste video URL here"
            value={url}
            onChangeText={setUrl}
            placeholderTextColor="#6b7280"
          />
          <TouchableOpacity
            style={styles.pasteButton}
            onPress={handlePaste}
          >
            <Ionicons name="clipboard-outline" size={24} color="#6366f1" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.downloadButton}
          onPress={handleDownload}
        >
          <Ionicons name="cloud-download-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>

        <View style={styles.supportedPlatforms}>
          <Text style={styles.platformsTitle}>Supported Platforms</Text>
          <View style={styles.platformIcons}>
            <Ionicons name="logo-youtube" size={32} color="#ff0000" style={styles.platformIcon} />
            <Ionicons name="logo-instagram" size={32} color="#e4405f" style={styles.platformIcon} />
            <Ionicons name="logo-tiktok" size={32} color="#000000" style={styles.platformIcon} />
          </View>
        </View>
      </View>
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
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginTop: 8,
  },
  content: {
    flex: 1,
    padding: 20,
    marginTop: -30,
    backgroundColor: '#f9fafb',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: '#1f2937',
  },
  pasteButton: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadButton: {
    flexDirection: 'row',
    backgroundColor: '#6366f1',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    shadowColor: '#6366f1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  supportedPlatforms: {
    marginTop: 40,
  },
  platformsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
    textAlign: 'center',
  },
  platformIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  platformIcon: {
    marginHorizontal: 16,
  },
});