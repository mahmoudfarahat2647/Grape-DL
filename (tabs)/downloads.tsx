import { View, Text, FlatList, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Temporary mock data
const mockDownloads = [
  {
    id: '1',
    title: 'Sample Video 1',
    platform: 'youtube',
    status: 'completed',
    progress: 100,
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
  },
  {
    id: '2',
    title: 'Sample Video 2',
    platform: 'instagram',
    status: 'downloading',
    progress: 45,
    thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3396c691',
  },
];

export default function DownloadsScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.downloadItem}>
      <View style={styles.thumbnailContainer}>
        {/* Replace with actual Image component when implementing */}
        <View style={styles.thumbnail} />
        {item.status === 'downloading' && (
          <View style={styles.progressOverlay}>
            <Text style={styles.progressText}>{item.progress}%</Text>
          </View>
        )}
      </View>
      
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <View style={styles.itemMeta}>
          <Ionicons
            name={`logo-${item.platform}`}
            size={16}
            color="#6b7280"
          />
          <Text style={styles.platformText}>{item.platform}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.actionButton}>
        <Ionicons
          name={item.status === 'completed' ? 'play-circle' : 'close-circle'}
          size={24}
          color={item.status === 'completed' ? '#6366f1' : '#ef4444'}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Downloads</Text>
      </View>

      <FlatList
        data={mockDownloads}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
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
  list: {
    padding: 16,
  },
  downloadItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  thumbnailContainer: {
    width: 80,
    height: 80,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  thumbnail: {
    backgroundColor: '#e5e7eb',
    width: '100%',
    height: '100%',
  },
  progressOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    color: 'white',
    fontWeight: 'bold',
  },
  itemContent: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  itemMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  platformText: {
    marginLeft: 4,
    color: '#6b7280',
    textTransform: 'capitalize',
  },
  actionButton: {
    padding: 8,
    justifyContent: 'center',
  },
});