import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
const OrderStatusScreen = () => {
  const router = useRouter();

  const orderData = [
    { status: 'Pending', count: 3, color: '#1B6D24' },
    { status: 'Processing', count: 5, color: '#1B6D24' },
    { status: 'In Transit', count: 12, color: '#1B6D24' },
    { status: 'Delivered', count: 3, color: '#1B6D24' },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pending': return 'time-outline';
      case 'Processing': return 'sync-outline';
      case 'In Transit': return 'car-outline';
      case 'Delivered': return 'checkmark-done-outline';
      default: return 'ellipse-outline';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Status</Text>
        <View style={styles.headerRight} />
      </View>

   
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
      
        {orderData.map((item, index) => (
          <View key={index} style={styles.statusItem}>
            <View style={styles.statusLeft}>
              <View style={[styles.statusIcon, { backgroundColor: item.color }]}>
                <Ionicons name={getStatusIcon(item.status)} size={20} color="#fff" />
              </View>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
            <Text style={styles.countText}>{item.count}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  headerRight: {
    width: 32,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderRadius: 8,
  borderBottomWidth:1,
    borderBottomColor: '#F0F0F0',
    marginBottom:10
  },
  statusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  statusText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  countText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
});

export default OrderStatusScreen;