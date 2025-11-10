import  React,  { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
export default function FarmLinkScreen() {
  const [activeTab, setActiveTab] = useState('Home');
   const router = useRouter();
   

   const navigationItems = [
    { id: 'Home', icon: 'home', label: 'Home' },
    { id: 'Market', icon: 'storefront', label: 'Market' },
    { id: 'Orders', icon: 'shopping-cart', label: 'Orders' },
    { id: 'Profile', icon: 'person', label: 'Profile' },
  ];
  
  const products = [
    { 
      id: 1, 
      image: require('../assets/images/Tomatoes.png'),
      name: 'Fresh Tomatoes', 
       price: '15000/basket',
      farm: 'Green Valley Farm',  
      
    },
    { 
      id: 2, 
      name: 'Eggs', 
      farm: 'Ahmed Farm',
      price: '15000/crate',
      image: require('../assets/images/Eggs.png') 
    },

    { 
      id: 3, 
      name: 'Sweet Corn', 
      farm: 'Lagos fresh co',
      price: '15000/Basket',
      image: require('../assets/images/Maize.png') 
    },
    { 
      id: 4, 
      name: 'Yam', 
      farm: 'Ayoola Farm',
      price: '15000/Basket',
      image: require('../assets/images/Yam.png') 
    },
  
  ]


  

  return (
    <SafeAreaView 
    style = {{flex:1}}> 
    <View style={styles.container}>
    
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}   >
            <Image source = {require ('../assets/images/logo.png')}
            style={styles.logoImage} resizeMode="contain"/> 
          </View>
          <View style={styles.headerText}>
            <Text style={styles.appName}>FarmLink</Text>
            <Text style={styles.country}>Nigeria</Text>
          </View>
        </View>
        
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Welcome back, Damilola!</Text>
          <View style={styles.location}>
            <Ionicons name="location-sharp" size={16} color="#2E7D32" />
            <Text style={styles.locationText}>Lagos, Nigeria</Text>
          </View>
        </View>

    
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for produce, farmers, livestock..."
            placeholderTextColor="#999"
          />
        </View>

      
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick actions</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.actionIcon}>
                <MaterialIcons name="storefront" size={24} color="#2E7D32" />
              </View>
              <Text style={styles.actionText}>Browse Marketplace</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}
            onPress={() => router.push('verifiedSellers')}>
              <View style={styles.actionIcon}>
                <MaterialIcons name="verified-user" size={24} color="#2E7D32" />
              </View>
              <Text style={styles.actionText}>View Verified Seller</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}
            onPress={() => router.push('recentOrder')}>
              <View style={styles.actionIcon}>
                <MaterialCommunityIcons name="package-variant-closed" size={24} color="#2E7D32" />
              </View>
              <Text style={styles.actionText}>Track Order</Text>
            </TouchableOpacity>
          </View>
        </View>

       
        <View style={styles.offerCard}>
          <View style={styles.offerHeader}>
            <Ionicons name="pricetag-outline" size={24} color="#0D631B;" />
            <Text style={styles.offerTitle}>Limited time offer</Text>
          </View>
          <Text style={styles.offerText}>20% OFF First Bulk Order</Text>
          <Text style={styles.offerCode}>Use code: FARMLINK20</Text>
          <TouchableOpacity style={styles.shopNowButton}
            >
            <Text style={styles.shopNowText}>  Shop now</Text>
          </TouchableOpacity>
        </View>

       
        <View style={styles.section}>
          <View style={styles.featuresHeader}>
            <Text style={styles.sectionTitle}>Featured Products</Text>
            <TouchableOpacity onPress={() => router.push('market')}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.productsGrid}>
            {products.map((product) => (
              <TouchableOpacity key={product.id} style={styles.productCard}>
               
                 <View style={styles.productImageContainer}>
                  <View style={styles.productImage}>
                    <Text style={styles.imagePlaceholder}></Text>
                    
                     <Image source={product.image} style={styles.productImage} resizeMode="cover" /> 
                  </View>
                </View>
              
                <View style={styles.productDetails}>
                  <Text style={styles.productName} numberOfLines={1}>
                    {product.name}
                  </Text>
                  <Text style={styles.productPrice}>
                    {product.price}
                  </Text>
                  <Text style={styles.productFarm} numberOfLines={1}>
                    {product.farm}
                  </Text>
                  
                </View>
              </TouchableOpacity>
            ))}

         </View>
        </View>
      </ScrollView>

    
      <View style={styles.bottomNavigation}>
       
          <TouchableOpacity 
          style={styles.navItem}
          onPress={() => setActiveTab('Home')}
        >
          <Ionicons 
            name={activeTab === 'Home' ? 'home' : 'home-outline'} 
            size={24} 
            color={activeTab === 'Home' ? '#2e7d32' : '#666'} 
          />
          <Text style={[
            styles.navLabel,
            { color: activeTab === 'Home' ? '#2e7d32' : '#666' }
          ]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => {setActiveTab('market')
          router.push('market')
          }}
          
        >
          <Ionicons 
            name={activeTab === 'Market' ? 'market' : 'storefront'} 
            size={24} 
            color={activeTab === 'market' ? '#2e7d32' : '#666'} 
          />
          <Text style={[
            styles.navLabel,
            { color: activeTab === 'Market' ? '#2e7d32' : '#666' }
          ]}>Market</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => {setActiveTab('Orders')
          router.push('Orders')
          }}
           
        >
          <Ionicons 
            name={activeTab === 'Orders' ? 'Orders' : 'cart-outline'} 
            size={24} 
            color={activeTab === 'Orders' ? '#2e7d32' : '#666'} 
          />
          <Text style={[
            styles.navLabel,
            { color: activeTab === 'Orders' ? '#2e7d32' : '#666' }
          ]}>Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() =>{ setActiveTab('Profile')
          router.push('buyerprofile')
          }}
        >
          <Ionicons 
            name={activeTab === 'Profile' ? 'profile' : 'person'} 
            size={24} 
            color={activeTab === 'Profile' ? '#2e7d32' : '#666'} 
          />
          <Text style={[
            styles.navLabel,
            { color: activeTab === 'Profile' ? '#2e7d32' : '#666' }
          ]}>Profile</Text>
        </TouchableOpacity>

        
      </View>
    </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor:"#CBFFC2"
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:8,
  
  },
  logoImage: {
    width: 150,
    height: 150,
    marginLeft:70,
    marginTop:25
    
    
  },
  logoText: {
    fontSize: 20,
  },
  headerText: {
     marginRight:10,
    
    
  },
  appName: {
    fontSize: 18,
    fontWeight: 600,
    color: '#007A44',
    marginRight:10
  },
  country: {
    fontSize: 13,
    color: '#007A44',
    fontWeight: 500
  },
 
  content: {
    flex: 1,
    paddingHorizontal: 20,
   
  },
  welcomeSection: {
    marginTop: 20,
    marginBottom: 15,
   
   
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 500,
    color: '#000',
    marginBottom: 5,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    color: '#666',
    fontWeight: 500,
    marginLeft: 5,

  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 25,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  actionIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#E8F5E8',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
  offerCard: {
    backgroundColor: '#A3F69C',
    borderRadius: 16,
    padding: 20,
    marginBottom: 25,
  },
  offerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  offerTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 8,
  },
  offerText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 5,
  },
  offerCode: {
    color: 'black',
    fontSize: 14,
    opacity: 0.9,
    marginBottom: 15,
    fontWeight: 400,
  },
  shopNowButton: {
    backgroundColor: '#0D631B',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
  },
  shopNowText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  featuresHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  seeAllText: {
    color: '#2E7D32',
    fontSize: 14,
    fontWeight: '600',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  featureIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureEmoji: {
    fontSize: 24,
  },
  featureName: {
    fontSize: 10,
    color: '#000',
    textAlign: 'center',
    
  },
  productsList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
 productCard: {
    width: '48%',
    backgroundColor: '#4B8223',
    borderRadius: 8,
    marginBottom: 15,
    padding: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  productImageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
 productImage: {
    width: '100%',
    height: 180,
    backgroundColor: '#4B8223',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    
  },
  productDetails: {
    paddingHorizontal: 4,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  imagePlaceholder: {
    fontSize: 32,
    color: '#999',
  },
  productFarm: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
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
  navItemActive: {
    
  },
  navLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  navLabelActive: {
    color: '#2E7D32',
    fontWeight: '600',
  },
});