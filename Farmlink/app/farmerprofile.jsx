import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const ProfileScreen = () => {

const router = useRouter();  
 
  const farmerData = {
    name: 'Farmer Jane',
    farmName: 'Sunny Fields Farm',
    location: 'Lagos',
    crops: ['Corn', 'Tomatoes', 'Peppers'],
    phone: '(234) 70 423 456 78',
    about: 'Experienced farmer with a passion for sustainable agriculture.',
    rating: 4.8,
    reviews: [
      {
        id: 1,
        reviewer: 'Jane Apackagi',
        comment: 'Jane\'s produce is always fresh and delicious.',
        date: '2 weeks ago'
      }
    ]
  };

 const handleBack = () => {
   router.back();
  };
  
  const handleBackHome = () => {
   router.push('farmersdashboard');
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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}
       onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
       
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Image 
              source={require('../assets/images/Ellipse 7.png')}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editImageButton}>
              <Ionicons name="camera" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.farmerName}>{farmerData.name}</Text>
          <Text style={styles.farmName}>{farmerData.farmName}</Text>
          <View style={styles.locationContainer}>
            <Ionicons name="location" size={16} color="#666" />
            <Text style={styles.location}>{farmerData.location}</Text>
          </View>
        </View>

    
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Crops</Text>
          <View style={styles.cropsContainer}>
            {farmerData.crops.map((crop, index) => (
              <View key={index} style={styles.cropTag}>
                <Text style={styles.cropText}>{crop}</Text>
              </View>
            ))}
          </View>
        </View>

       
        <View style={styles.section}>
          <View style={styles.contactHeader}>
            <Text style={styles.sectionTitle}>Contact</Text>
            <TouchableOpacity style={styles.editProfileButton}>
              <Ionicons name="create-outline" size={18} color="#2d5a27" />
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contactContainer}>
            
            <Text style={styles.phoneNumber}>{farmerData.phone}</Text>
            <TouchableOpacity style={styles.callButton}>
              <Ionicons name="call-outline" size={18} color="#2d5a27" />
            </TouchableOpacity>
          </View>
        </View>

        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.aboutText}>{farmerData.about}</Text>
        </View>

       
        <View style={styles.section}>
          <View style={styles.ratingsHeader}>
            <Text style={styles.sectionTitle}>Ratings</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See all</Text>
              <Ionicons name="chevron-forward" size={16} color="#2d5a27" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.ratingsContainer}>
            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Ionicons
                  key={star}
                  name={star <= Math.floor(farmerData.rating) ? 'star' : 'star-outline'}
                  size={24}
                  color="#FFD700"
                />
              ))}
            </View>
            <Text style={styles.ratingText}>{farmerData.rating}</Text>
          </View>
        </View>

      
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reviews</Text>
          {farmerData.reviews.map((review) => (
            <View key={review.id} style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewerAvatar}>
                  <Text style={styles.reviewerInitial}>
                    {review.reviewer.split(' ')[0].charAt(0)}
                  </Text>
                </View>
                <View style={styles.reviewerInfo}>
                  <Text style={styles.reviewerName}>{review.reviewer}</Text>
                  <Text style={styles.reviewDate}>{review.date}</Text>
                </View>
              </View>
              <Text style={styles.reviewComment}>{review.comment}</Text>
            </View>
          ))}
        </View>

      
        <TouchableOpacity style={styles.viewFarmButton}>
          <Text style={styles.viewFarmText}>View Farm</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Ionicons name="log-out-outline" size={20} color="#dc3545" />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>

     
        <View style={styles.bottomSpacing} />
      </ScrollView>

      <View style={styles.bottomNav}
       onPress={handleBackHome}>
      
        <TouchableOpacity style={styles.navItem}
         >
          <Ionicons name="home" size={24} color="#999" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="storefront" size={24} color="#999" />
          <Text style={styles.navText}>Market</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cart-outline" size={24} color="#999" />
          <Text style={styles.navText}>Orders</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}
        >
          <Ionicons name="person" size={24} color="#999" />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  headerPlaceholder: {
    width: 32,
  },
  scrollView: {
    flex: 1,
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatarContainer: {
    marginBottom: 16,
    position: 'relative',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
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
  farmerName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  farmName: {
    fontSize: 18,
    color: '#2d5a27',
    fontWeight: '600',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 16,
    color: '#29672B',
    marginLeft: 4,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  contactHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  editProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e8f5e8',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 4,
  },
  editProfileText: {
    color: '#2d5a27',
    fontSize: 14,
    fontWeight: '600',
  },
  cropsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  cropTag: {
    backgroundColor: '#e8f5e8',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2d5a27',
  },
  cropText: {
    color: '#2d5a27',
    fontSize: 14,
    fontWeight: '500',
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  phoneNumber: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  callButton: {
    padding: 8,
    backgroundColor: '#e8f5e8',
    borderRadius: 20,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  ratingsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    color: '#2d5a27',
    fontSize: 14,
    fontWeight: '600',
    marginRight: 2,
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  reviewCard: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  reviewerInitial: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewerInfo: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  reviewDate: {
    fontSize: 12,
    color: '#666',
  },
  reviewComment: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },
  viewFarmButton: {
    margin: 20,
    marginTop: 10,
    backgroundColor: '#29672B',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2d5a27',
  },
  viewFarmText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    marginTop: 10,
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#dc3545',
    gap: 8,
  },
  signOutText: {
    color: '#dc3545',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomSpacing: {
    height: 60,
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
    justifyContent: 'center',
      paddingVertical: 8,
  },
  activeNavItem: {
   color:'#2d5a27'
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

export default ProfileScreen;