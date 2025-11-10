import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
const { width } = Dimensions.get('window');


const FarmerDashboardScreen = () => {

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      
      
      <ImageBackground

        style={styles.header}
      >
        <View style={styles.headerOverlay}>
          <View style={styles.headerContent}>
            <View style={styles.logoContainer}>
              <View style={styles.logo}>
                 <Image source = {require ('../assets/images/logo.png')}
                            style={styles.logoImage} resizeMode="contain"/> 
              </View>
              <View>
                <Text style={styles.appName}>FarmLink</Text>
                <Text style={styles.location}>Nigeria</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.navTabsScroll}
          contentContainerStyle={styles.navTabsContent}
        >
          <TouchableOpacity style={[styles.navTab, styles.activeTab]}>
            <Text style={[styles.navTabText, styles.activeTabText]}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navTab}>
            <Text style={styles.navTabText}>My Products</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navTab}>
            <Text style={styles.navTabText}>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navTab}>
            <Text style={styles.navTabText}>Messages</Text>
          </TouchableOpacity>
          
        </ScrollView>

        
        <ScrollView 
          style={styles.mainScrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
         
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Ionicons name="search" size={20} color="#999" />
              <Text style={styles.searchPlaceholder}>Search for produce, farmers, livestock...</Text>
            </View>
          </View>

         
          <View style={styles.alertBanner}>
            <Ionicons name="warning" size={20} color='#2E7D32' />
            <Text style={styles.alertText}>5 products are low in stock</Text>
           
          </View>

         
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>Welcome back, John!</Text>
            <Text style={styles.welcomeSubtext}>Here's your farm overview for today</Text>
          </View>

         
          <View style={styles.statsGrid}>
           
            <View style={styles.statCard}>
              <Text style={styles.statValue}>$2,847</Text>
              <Text style={styles.statLabel}>Total Revenue</Text>
              <View style={styles.statTrend}>
                <Ionicons name="trending-up" size={14} color="#4CAF50" />
                <Text style={styles.trendText}>1.2% this month</Text>
              </View>
            </View>

           
            <View style={styles.statCard}>
              <Text style={styles.statValue}>23</Text>
              <Text style={styles.statLabel}>Active Orders</Text>
              <View style={styles.statTrend}>
                <Ionicons name="arrow-up" size={14} color="#4CAF50" />
                <Text style={styles.trendText}>↑ 5 new today</Text>
              </View>
            </View>

            
            <View style={styles.statCard}>
              <Text style={styles.statValue}>156</Text>
              <Text style={styles.statLabel}>Total Products</Text>
              <Text style={styles.statSubtext}>8 low in stock</Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statValue}>4.8 ★</Text>
              <Text style={styles.statLabel}>Average Rating</Text>
              <Text style={styles.statSubtext}>From 89 reviews</Text>
            </View>
          </View>

          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Quick actions</Text>
            <View style={styles.actionsGrid}>
              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.actionIcon}>
                  <Ionicons name="add-circle" size={24} color="#000" />
                </View>
                <Text style={styles.actionText}>Add New Product</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.actionIcon}>
                  <Ionicons name="people" size={24} color="#000" />
                </View>
                <Text style={styles.actionText}>View verified buyers</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.actionIcon}>
                  <Ionicons name="chatbubble" size={24} color="#000" />
                </View>
                <Text style={styles.actionText}>View Messages</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.actionIcon}>
                  <Ionicons name="cube" size={24} color="#000" />
                </View>
                <Text style={styles.actionText}>Track Orders</Text>
              </TouchableOpacity>
            </View>
          </View>

          
        </ScrollView>
      </View>

      
      <View style={styles.bottomNav}>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Ionicons name="home" size={24} color="#2D5A3D" />
          <Text style={[styles.navItemText, styles.activeNavItemText]}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="storefront" size={24} color="#999" />
          <Text style={styles.navItemText}>Market</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}
        onPress={() => router.push('farmerorderstatus')}>
          <Ionicons name="cart" size={24} color="#999" />
          <Text style={styles.navItemText}>Orders</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} 
          onPress={() => router.push('farmerprofile')} >
          <Ionicons name="person" size={24} color="#999" />
          <Text style={styles.navItemText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBFFC2',
  },
  content: {
    flex: 1,
  },
  header: {
    height: 140,
  },
  headerOverlay: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  headerContent: {
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoImage: {
    width: 150,
    height: 150,
    marginLeft:90,
    marginTop:30
  },
  appName: {
    color: '#2D5A3D',
    fontSize: 24,
    fontWeight: 'bold',
  },
  location: {
    color: '#2D5A3D',
    fontSize: 14,
    marginTop: 2,
  },
 
  navTabsScroll: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
    maxHeight: 50,
  },
  navTabsContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  navTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#2D5A3D',
  },
  navTabText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#2D5A3D',
    fontWeight: '600',
  },
  mainScrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80, 
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  searchPlaceholder: {
    marginLeft: 8,
    fontSize: 14,
    color: '#999',
  },
  alertBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#B5F486',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 20,
    marginTop: 8,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2E7D32',
  },
  alertText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2E7D32',
    marginLeft: 8,
   
  },
  alertSubtext: {
    fontSize: 12,
    color: '#E65100',
    marginLeft: 8,
  },
  welcomeSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D5A3D',
    marginBottom: 4,
  },
  welcomeSubtext: {
    fontSize: 14,
    color: '#666',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 12,
  },
  statCard: {
    width: (width - 56) / 2,
    backgroundColor: '#D9D9D9A1',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  statTrend: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendText: {
    fontSize: 12,
    color: '#4CAF50',
    marginLeft: 4,
  },
  statSubtext: {
    fontSize: 12,
    color: '#999',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D5A3D',
    marginBottom: 16,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionButton: {
    width: (width - 64) / 2,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,

    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D5A3D',
    textAlign: 'center',
  },
  extraContent: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  extraTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D5A3D',
    marginBottom: 16,
  },
  activityList: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F8F9FA',
  },
  activityText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    marginLeft: 12,
  },
  activityTime: {
    fontSize: 12,
    color: '#999',
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#A3F69C',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E9ECEF',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  activeNavItem: {
   
  },
  navItemText: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  activeNavItemText: {
    color: '#2D5A3D',
    fontWeight: '600',
  },
  attribution: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 10,
  },
  attributionText: {
    fontSize: 12,
    color: '#999',
  },
});

export default FarmerDashboardScreen;