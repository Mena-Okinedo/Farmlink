import  Usestate from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function OrdersScreen({  }) {
  const orders = [
    {
      id: 'F1-2415',
      status: 'In Transit',
      statusColor: '#FFFFFF',
      backgroundColor: '#A8B3C4',
      trackText: 'Track',
      product: 'Fresh Tomatoes (3 Baskets)',
      date: 'October 25th, 2025',
    
    },
    {
      id: 'F1-2400',
      status: 'Delivered',
      statusColor: '#ffff',
      backgroundColor: '#7FBB55',
      trackText: 'Track',
      product: 'Chicken Eggs (5 Crates)',
      date: 'October 20th, 2025',
      
    },
    {
      id: 'F1-2315',
      status: 'Delivered',
      statusColor: '#ffff',
      backgroundColor: '#7FBB55',
      trackText: 'Track',
      product: 'Chicken Eggs (5 Crates)',
      date: 'October 18th, 2025',
      
    }
  ];
  
 const goBackToHome = () => {
    router.push('Home');
  };

  const OrderCard = ({ order }) => (
    <View style={styles.orderCard}>
      
      <View style={styles.orderHeader}>
        <View style={styles.orderIdContainer}>
          <Text style={styles.orderId}>#{order.id}</Text>
          <View style={[styles.statusBadge, { backgroundColor: order.backgroundColor }]}>
            <Text style={[styles.statusText, { color: order.statusColor }]}>
              {order.status}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.trackButton}>
          <Text style={styles.trackText}>{order.trackText}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.orderDetails}>
        <View style={styles.productInfo}>
          <Text style={styles.productIcon}>{order.icon}</Text>
          <View style={styles.productTextContainer}>
            <Text style={styles.productName}>{order.product}</Text>
            <Text style={styles.orderDate}>{order.date}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
     
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={goBackToHome}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Orders</Text>
        <View style={styles.headerRightPlaceholder} />
      </View>

    
      <ScrollView style={styles.ordersList} showsVerticalScrollIndicator={false}>
        <View style={styles.ordersContainer}>
          {orders.map((order, index) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  headerRightPlaceholder: {
    width: 40,
  },
  ordersList: {
    flex: 1,
  },
  ordersContainer: {
    padding: 20,
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  orderIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 12,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  trackButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    
  
  },
  trackText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
  orderDetails: {
    
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  productTextContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  orderDate: {
    fontSize: 14,
    color: '#666',
  },
});