import  { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function VerifiedSellersScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  
  

  const verifiedSellers = [
    {
      id: 1,
      name: 'Kano Farms Ltd.',
      location: 'Kano, Kano State',
      product: '300 Baskets Tomatoes',
      rating: 4.8,
      reviews: 124,
      verified: true,
      Image: require('../assets/images/kano farm.png')
    },
    {
      id: 2,
      name: 'Ahmed Poultry',
      location: 'Ilorin, Kwara State',
      product: '30 Crates of Egg',
      rating: 4.6,
      reviews: 89,
      verified: true,
      Image: require('../assets/images/Ahmed poultry.png')
    
    },
    {
      id: 3,
      name: 'Ayoola Farm',
      location: 'Osogbo, Osun State',
      product: '300 Tubers of Yam',
      rating: 4.9,
      reviews: 156,
      verified: true,
      Image: require('../assets/images/Ayola farm.png')
    },
    {
      id: 4,
      name: 'Green Valley Farms',
      location: 'Ibadan, Oyo State',
      product: '150 Bags of Rice',
      rating: 4.7,
      reviews: 203,
      verified: true,
      
    },
    {
      id: 5,
      name: 'Fresh Produce Co.',
      location: 'Abuja, FCT',
      product: '200 Baskets Vegetables',
      rating: 4.5,
      reviews: 67,
      verified: true,
     
    },
    {
      id: 6,
      name: 'Organic Harvest',
      location: 'Benin, Edo State',
      product: '100 Crates Fruits',
      rating: 4.8,
      reviews: 142,
      verified: true,
      
    }
  ];

  const goBackToHome = () => {
  router.push('Home');
  };


  const filteredSellers = verifiedSellers.filter(seller =>
    seller.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    seller.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    seller.product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const SellerCard = ({ seller }) => (
    <TouchableOpacity style={styles.sellerCard}>
     
      <View style={styles.sellerImageContainer}>
        <View style={styles.sellerImage}>
          <Text style={styles.sellerImagePlaceholder}></Text>
         <Image 
            source={seller.image} 
           
           
          />
          
        </View>
        <View style={styles.verifiedBadge}>
          <MaterialIcons name="verified" size={16} color="#fff" />
        </View>
      </View>

    
      <View style={styles.sellerDetails}>
        <View style={styles.sellerHeader}>
          <Text style={styles.sellerName}>{seller.name}</Text>
          <View style={styles.ratingContainer}>
            <MaterialIcons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>{seller.rating}</Text>
            <Text style={styles.reviewsText}>({seller.reviews})</Text>
          </View>
        </View>

        <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={14} color="#666" />
          <Text style={styles.locationText}>{seller.location}</Text>
        </View>

        <View style={styles.productContainer}>
          <MaterialIcons name="inventory" size={14} color="#2E7D32" />
          <Text style={styles.productText}>{seller.product}</Text>
        </View>

        

        
          
        <View style={styles.actionButtons}>

            <TouchableOpacity style={styles.viewProductsButton}>
            <MaterialIcons name="call" size={16} color="black" />
            <Text style={styles.viewProductsText}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.messageButton}>
            <MaterialIcons name="message" size={16} color="black" />
            <Text style={styles.messageButtonText}>Message</Text>
          </TouchableOpacity>
          
          
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={goBackToHome}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Verified Farmers</Text>
          <Text style={styles.headerSubtitle}>Trusted sellers with quality produce</Text>
        </View>
      </View>

      
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search verified farmers..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={20} color="#999" />
          </TouchableOpacity>
        )}
      </View>

      
      <View style={styles.filterSection}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={[styles.filterButton, styles.filterButtonActive]}>
            <Text style={[styles.filterText, styles.filterTextActive]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Poultry</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Crops</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Livestock</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Dairy</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

     
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsText}>
          {filteredSellers.length} verified farmers found
        </Text>
      </View>

      
      <ScrollView style={styles.sellersList} showsVerticalScrollIndicator={false}>
        {filteredSellers.map((seller) => (
          <SellerCard key={seller.id} seller={seller} />
        ))}
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
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor: '#fff',
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },

  backButton: {
    padding: 8,
    marginRight: 10,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  filterSection: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f8f8f8',
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  filterButtonActive: {
    backgroundColor: '#2E7D32',
    borderColor: '#2E7D32',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  filterTextActive: {
    color: '#fff',
  },
  resultsContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  resultsText: {
    fontSize: 14,
    color: '#666',
  },
  sellersList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sellerCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
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
  sellerImageSection: {
    alignItems: 'center',
    marginRight: 15,
    width: 80,
  },
  sellerImageContainer: {
    position: 'relative',
    marginBottom: 8,
  },


 sellerImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#2E7D32',
    backgroundColor: '#E8F5E8', 
  },
  sellerImagePlaceholder: {
    fontSize: 24,
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 4,
    right: 3,
    backgroundColor: 'black',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  sellerDetails: {
    flex: 1,
  },
  sellerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  sellerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    marginRight: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginLeft: 4,
    marginRight: 2,
  },
  reviewsText: {
    fontSize: 12,
    color: '#666',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  productText: {
    fontSize: 14,
    color: '#2E7D32',
    fontWeight: '600',
    marginLeft: 6,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#A3F69C',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#A3F69C',
  },
  messageButtonText: {
    fontSize: 12,
    color: 'black',
    fontWeight: '600',
    marginLeft: 4,
  },
  viewProductsButton: {
    flexDirection: 'row',
     alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderColor: 'black',
     backgroundColor: '#A3F69C',
    borderRadius: 6,
  },
  viewProductsText: {
    fontSize: 12,
    color: 'black',
    fontWeight: '600',
  },
});