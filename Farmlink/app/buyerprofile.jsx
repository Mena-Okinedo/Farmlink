import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  Switch,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter} from 'expo-router';

const BuyerProfileScreen = () => {

  
  const router = useRouter();  
 
  const buyerData = {
    name: 'Bello Aishat Damiiola',
    location: 'Lagos, Nigeria',
    memberSince: 'October, 2025',
    stats: {
      totalOrders: 47,
      activeOrders: 3,
      savedItems: 12
    }
  };

  

  const handleSignOut = () => {
      Alert.alert(
        "Sign Out",
        "Are you sure you want to sign out?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          {
            text: "Sign Out",
            style: "destructive",
            onPress: () => {router.push('onboarding')
             
              console.log("User signed out");
            }
          }
        ]
      );
    };
   


  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
      
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face' }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editImageButton}>
              <Ionicons name="camera" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.buyerName}>{buyerData.name}</Text>
          <Text style={styles.buyerLocation}>{buyerData.location}</Text>
          <Text style={styles.memberSince}>Member since {buyerData.memberSince}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{buyerData.stats.totalOrders}</Text>
            <Text style={styles.statLabel}>Total orders</Text>
          </View>
          
          <View style={styles.statDivider} />
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{buyerData.stats.activeOrders}</Text>
            <Text style={styles.statLabel}>Active orders</Text>
          </View>
          
          <View style={styles.statDivider} />
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{buyerData.stats.savedItems}</Text>
            <Text style={styles.statLabel}>Saved item</Text>
          </View>
        </View>

       
        <View style={styles.sectionDivider} />

        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ACCOUNT</Text>
          
         
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.menuIconContainer}>
                <Ionicons name="person-outline" size={20} color="#EBBEB0" />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuItemTitle}>Personal Information</Text>
                <Text style={styles.menuItemSubtitle}>Update your details</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#EBBEB0" />
          </TouchableOpacity>

        
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.menuIconContainer}>
                <Ionicons name="location-outline" size={20} color="#EBBEB0" />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuItemTitle}>Delivery Addresses</Text>
                <Text style={styles.menuItemSubtitle}>Lagos, Nigeria</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#EBBEB0" />
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.menuIconContainer}>
                <Ionicons name="card-outline" size={20} color="#EBBEB0" />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuItemTitle}>Payment Method</Text>
                <Text style={styles.menuItemSubtitle}>Manage payment options</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#EBBEB0" />
          </TouchableOpacity>
        </View>

        <View style={styles.sectionDivider} />

      
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ORDERS & ACTIVITIES</Text>
          
      
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.menuIconContainer}>
                <Ionicons name="bag-outline" size={20} color="#EBBEB0" />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuItemTitle}>My Orders</Text>
                <Text style={styles.menuItemSubtitle}>View orders history</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#EBBEB0" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.menuIconContainer}>
                <Ionicons name="heart-outline" size={20} color="#EBBEB0" />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuItemTitle}>Saved Items</Text>
                <Text style={styles.menuItemSubtitle}>Your favorites</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#EBBEB0" />
          </TouchableOpacity>
        </View>

        <View style={styles.sectionDivider} />

       
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PREFERENCES</Text>
          
          
          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.menuIconContainer}>
                <Ionicons name="notifications-outline" size={20} color="#EBBEB0" />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuItemTitle}>Notifications</Text>
                <Text style={styles.menuItemSubtitle}>Manage alerts & updates</Text>
              </View>
            </View>
            <Switch
              trackColor={{ false: '#767577', true: '#e8f5e8' }}
              thumbColor={notificationsEnabled ? '#EBBEB0' : '#f4f3f4'}
              onValueChange={toggleNotifications}
              value={notificationsEnabled}
            />
          </View>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.menuIconContainer}>
                <Ionicons name="shield-checkmark-outline" size={20} color="#EBBEB0" />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuItemTitle}>Privacy & Security</Text>
                <Text style={styles.menuItemSubtitle}>Control your data</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#EBBEB0" />
          </TouchableOpacity>
        </View>

    
        <View style={styles.sectionDivider} />

       
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SUPPORT</Text>
          
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.menuIconContainer}>
                <Ionicons name="help-circle-outline" size={20} color="#EBBEB0" />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuItemTitle}>Help Center</Text>
                <Text style={styles.menuItemSubtitle}>FAQs & Support</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#EBBEB0" />
          </TouchableOpacity>
        </View>

       
        <TouchableOpacity style={styles.signOutButton}
        onPress={handleSignOut}>
          <Ionicons name="log-out-outline" size={20} color="#FFCDC8" />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>

     
        <View style={styles.bottomSpacing} />
      </ScrollView>

     
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}
         onPress={() => router.push('Home')}>
          <Ionicons name="home" size={24} color="#666" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}
          onPress={() => router.push('market')}>
          <Ionicons name="storefront" size={24} color="#666" />
          <Text style={styles.navText}>Market</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}
        onPress={() => router.push('Orders')}>
          <Ionicons name="cart-outline" size={24} color="#666" />
          <Text style={styles.navText}>Orders</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={24} color="#2d5a27" />
          <Text style={[styles.navText, styles.activeNavText]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FBF0',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#CBFFC2',
    
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  profileHeader: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#CBFFC2',
  },
  avatarContainer: {
    marginBottom: 16,
    position: 'relative',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#2d5a27',
  },
  editImageButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: '#2d5a27',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  buyerName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
  },
  buyerLocation: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
    textAlign: 'center',
  },
  memberSince: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d5a27',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#e0e0e0',
  },
  sectionDivider: {
    height: 8,
    backgroundColor: '#f8f9fa',
  },
  section: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    backgroundColor:'#fff',
    borderRadius:8,
    marginBottom:20,
    borderBottomColor: '#f0f0f0',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 2,
  },
  menuItemSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    marginTop: 30,
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFCDC8',
    gap: 8,
  },
  signOutText: {
    color: '#FFCDC8',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomSpacing: {
    height: 80,
  },
  

  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: '#A3F69C',
    borderTopWidth: 1,
    borderTopColor: '#A3F69C',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  

 navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: '#666',
    fontWeight: '500',
  },
  activeNavText: {
    color: '#2d5a27',
  },
});

export default BuyerProfileScreen;