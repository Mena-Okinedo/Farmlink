import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function MarketScreen() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('Market');
  const [cartItemsCount, setCartItemsCount] = useState(3);
  const router = useRouter();
  
  const categories = ['All', 'Vegetables', 'Grains', 'Fruits', 'Roots & Tubers', 'Legumes', 'Livestock'];
  
  const products = [
    {
      id: 1,
      name: 'Tomatoes',
      rating: 4.8,
      reviews: 124,
      farm: 'Kano farm ltd',
      distance: '5km',
      location: 'Kano, Kano',
      minOrder: '10kg min',
      price: '₦15,000',
      unit: 'per basket',
      image:require('../assets/images/Tomatoes.png')
    },
    {
      id: 2,
      name: 'Sweet Corn',
      rating: 4.7,
      reviews: 89,
      farm: 'Lagos fresh co',
      distance: '8km',
      location: 'Ikorodu, Lagos',
      minOrder: '5 pieces min',
      price: '₦320',
      unit: 'per piece',
      image: require('../assets/images/Maize.png')
    },
    {
      id: 3,
      name: 'Fresh Eggs',
      rating: 4.8,
      reviews: 156,
      farm: 'Happy Hen Farm',
      distance: '12km',
      location: 'Ikorodu, Lagos',
      minOrder: '1 crate min',
      price: '₦150',
      unit: 'Per egg',
      image: require('../assets/images/Eggs.png')
    },
    {
      id: 4,
      name: 'Carrots',
      rating: 4.6,
      reviews: 78,
      farm: 'Fresh Roots',
      distance: '6km',
      location: 'Surulere, Lagos',
      minOrder: '5kg min',
      price: '₦1,200',
      unit: 'per Kg',
      image: require('../assets/images/Carrot.png')
    },
    {
      id: 5,
      name: 'Bell Peppers',
      rating: 4.5,
      reviews: 92,
      farm: 'Colorful Harvest',
      distance: '15km',
      location: 'Victoria Island, Lagos',
      minOrder: '3kg min',
      price: '₦3,200',
      unit: 'per Kg',
      image: require('../assets/images/Bellpeper.png')
    },
    {
      id: 6,
      name: 'Lenti',
      rating: 4.7,
      reviews: 65,
      farm: 'Green Leaf',
      distance: '7km',
      location: 'Yaba, Lagos',
      minOrder: '2 bundles min',
      price: '₦900',
      unit: 'per bundle',
      image:require('../assets/images/Lenti.png')
    },
    {
      id: 7,
      name: 'Cabbage',
      rating: 4.7,
      reviews: 65,
      farm: 'Green Leaf',
      distance: '7km',
      location: 'Yaba, Lagos',
      minOrder: '2 bundles min',
      price: '₦900',
      unit: 'per bundle',
      image:require('../assets/images/Cabbage.png')
    },

    {
      id: 8,
      name: 'Barely',
      rating: 4.7,
      reviews: 65,
      farm: 'Green Leaf',
      distance: '7km',
      location: 'Yaba, Lagos',
      minOrder: '2 bundles min',
      price: '₦900',
      unit: 'per bundle',
      image:require('../assets/images/Barely.png')
    },

    {
      id: 9,
      name: 'Beet Root',
      rating: 4.7,
      reviews: 65,
      farm: 'Green Leaf',
      distance: '7km',
      location: 'Yaba, Lagos',
      minOrder: '2 bundles min',
      price: '₦900',
      unit: 'per bundle',
      image:require('../assets/images/Beet root.png')
    },
    {
      id: 10,
      name: 'Cocumber',
      rating: 4.7,
      reviews: 65,
      farm: 'Green Leaf',
      distance: '7km',
      location: 'Yaba, Lagos',
      minOrder: '2 bundles min',
      price: '₦900',
      unit: 'per bundle',
      image:require('../assets/images/Cocumber.png')
    },

    {
      id: 11,
      name: 'Green Peas',
      rating: 4.7,
      reviews: 65,
      farm: 'Green Leaf',
      distance: '7km',
      location: 'Yaba, Lagos',
      minOrder: '2 bundles min',
      price: '₦900',
      unit: 'per bundle',
      image:require('../assets/images/Greenpeas.png')
    },

    {
      id: 12,
      name: 'Kidney Beans',
      rating: 4.7,
      reviews: 65,
      farm: 'Green Leaf',
      distance: '7km',
      location: 'Yaba, Lagos',
      minOrder: '2 bundles min',
      price: '₦900',
      unit: 'per bundle',
      image:require('../assets/images/Kidneybeans.png')
    },
  ];

  const navigationItems = [
    { id: 'Home', icon: 'home', label: 'Home' },
    { id: 'Market', icon: 'storefront', label: 'Market' },
    { id: 'Orders', icon: 'shopping-cart', label: 'Orders' },
    { id: 'Profile', icon: 'person', label: 'Profile' },
  ];

  const goBack = () => {
    router.back();
  };

  const ProductCard = ({ product }) => (
    <View style={styles.productCard}>
      
      <View style={styles.productImageContainer}>
        <Image 
          source={product.image} 
          style={styles.productImage}
          resizeMode="cover"
          onError={(error) => console.log('Image loading error:', error)}
        />
      </View>
      
      <View style={styles.productInfo}>
        <View style={styles.productHeader}>
          <Text style={styles.productName} numberOfLines={1}>{product.name}</Text>
          <View style={styles.ratingContainer}>
            <MaterialIcons name="star" size={12} color="#FFD700" />
            <Text style={styles.ratingText}>{product.rating}({product.reviews})</Text>
          </View>
        </View>
        
        
        <View style={styles.farmInfo}>
          <Text style={styles.farmName} numberOfLines={1}>{product.farm}</Text>
          <Text style={styles.distance}>{product.distance}</Text>
        </View>

       
        <View style={styles.locationRow}>
          <Ionicons name="location-sharp" size={12} color="#fff" />
          <Text style={styles.locationText} numberOfLines={1}>{product.location}</Text>
        </View>

        <View style={styles.minOrderRow}>
          <MaterialIcons name="inventory" size={12} color="#fff" />
          <Text style={styles.minOrderText}>{product.minOrder}</Text>
        </View>
        
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.unit}>{product.unit}</Text>
        </View>
        
        <TouchableOpacity style={styles.addButton}>
           <Ionicons name="cart-outline" size={12} color="#000" />
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
    
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={goBack}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.marketTitle}>FarmLink Market</Text>
          <Text style={styles.marketSubtitle}>Fresh from Nigerian farms</Text>
        </View>
        <View style={styles.headerRightPlaceholder} />
        <TouchableOpacity style={styles.cartIconContainer}>
            <MaterialIcons name="shopping-cart" size={24} color="#000" />
            {cartItemsCount > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{cartItemsCount}</Text>
              </View>
            )}
          </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
       
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for produce, farmers, livestock..."
            placeholderTextColor="#999"
          />
        </View>

      
        <View style={styles.locationSection}>
          <View style={styles.locationHeader}>
            <Ionicons name="location-sharp" size={16} color="#0D631B" />
            <Text style={styles.locationText}>Lagos</Text>
          </View>
        </View>

       
        <View style={styles.section}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryButton,
                  activeCategory === category && styles.categoryButtonActive
                ]}
                onPress={() => setActiveCategory(category)}
              >
                <Text style={[
                  styles.categoryText,
                  activeCategory === category && styles.categoryTextActive
                ]}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

       
        <View style={styles.productsHeader}>
          <Text style={styles.productsCount}>{products.length} products</Text>
          <View style={styles.sortContainer}>
            <Text style={styles.sortLabel}>Sort: </Text>
            <Text style={styles.sortValue}>Featured</Text>
            <MaterialIcons name="keyboard-arrow-down" size={16} color="#666" />
          </View>
        </View>

        <View style={styles.productsGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </View>

     
        <View style={styles.bottomSpacing} />
      </ScrollView>

     
      <View style={styles.bottomNavigation}>
        {navigationItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.navItem}
            onPress={() => {
              if (item.id === 'Home') {
                router.push('Home');
              } else {
                setActiveTab(item.id);
              }
            }}
          >
            <MaterialIcons
              name={item.icon}
              size={24}
              color={activeTab === item.id ? '#2E7D32' : '#666'}
            />
            <Text
              style={[
                styles.navLabel,
                activeTab === item.id && styles.navLabelActive
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
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
  headerContent: {
    flex: 1,
    alignItems: 'center',
  },
  marketTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 2,
  },
  marketSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  headerRightPlaceholder: {
    width: 40,
  },

  cartIconContainer: {
    position: 'relative',
    padding: 8,
  },
cartBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#FF4444',
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#fff',
  },

   cartBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginVertical: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  locationSection: {
    marginBottom: 18,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 8,
    fontWeight: '600',
    color: '#0D631B',
    marginLeft: 6,

  },
  section: {
    marginBottom: 16,
  },
  categoriesScroll: {
    marginHorizontal: -4,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f8f8f8',
    borderRadius: 20,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  categoryButtonActive: {
    backgroundColor: '#2E7D32',
    borderColor: '#2E7D32',
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  categoryTextActive: {
    color: '#fff',
  },
  productsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  productsCount: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortLabel: {
    fontSize: 14,
    color: '#666',
  },
  sortValue: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    marginRight: 4,
  },

  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#4B8223',
    borderRadius: 12,
    padding: 12,
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
  productImageContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    backgroundColor: '#E8F5E8',
  },
  productInfo: {
    flex: 1,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
    flex: 1,
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  ratingText: {
    fontSize: 10,
    color: '#666',
    marginLeft: 2,
  },
  farmInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  farmName: {
    fontSize: 12,
    color: '#FFF',
    flex: 1,
  },
  distance: {
    fontSize: 10,
    color: '#FFF',
    fontWeight: '600',
    marginLeft: 4,
  },
  
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  locationText: {
    fontSize: 10,
    color: '#FFF',
    marginLeft: 4,
    flex: 1,
  },
  
  minOrderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  minOrderText: {
    fontSize: 10,
    color: '#FFF',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  unit: {
    fontSize: 12,
    color: '#fff',
  },
  addButton: {
    backgroundColor: '#FFF',
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: 'center',
   
   
  },
  addButtonText: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
  },
  bottomSpacing: {
    height: 80,
  },
  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
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