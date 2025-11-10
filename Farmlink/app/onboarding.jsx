import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Animated,
  Dimensions,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const onboardingData = [
  {
    id: '1',
    title: 'Farming Meets Opportunity',
    description: 'Join thousands of Nigerian farmers and buyers building a smarter, fairer food system one harvest at a time.',
    skipText: 'Skip',
    nextText: 'Next →',
    image:  require('../assets/images/Ellipse 1.png')
  },
  {
    id: '2',
    title: 'Your Farm. Your Market.',
    description: 'Upload your harvest, set your price, and sell directly to verified buyers. FarmLink puts you in control.',
    skipText: 'Skip',
    nextText: 'Next →',
    image:  require('../assets/images/Ellipse 2.png')
  },
  {
    id: '3',
    title: 'Buy Local. Eat Fresh.',
    description: 'Discover fresh produce from nearby farms, chat with sellers, and get it delivered no middlemen, no markup.',
    skipText: 'Skip',
    nextText: 'Next →',
    image:  require('../assets/images/Ellipse 3.png')
  },
  {
    id: '4',
    title: 'Verified & Protected',
    description: 'FarmLink is built with trust at its core verified users, secure transactions, and real-time support.',
    skipText: null,
    nextText: null,
    hasOptions: true,
    image:  require('../assets/images/Ellipse 4.png')
  }
];


const FALLBACK_IMAGE = { uri: 'https://via.placeholder.com/300x300/2D5A3D/FFFFFF?text=FarmLink' };

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedRole, setSelectedRole] = useState(null);
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems[0]) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50
  }).current;

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
    
      console.log('Onboarding completed');
    }
  };

  const handleSkip = () => {
    flatListRef.current.scrollToIndex({ index: onboardingData.length - 1 });
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    console.log(`Selected role: ${role}`);
    
 
    if (role === 'farmer') {
      router.push('farmersignup');
    } else if (role === 'buyer') {
      router.push('buyersignup');
    }
  };

  const getImageSource = (item) => {
    
    if (item.image && typeof item.image === 'object' && item.image.uri) {
      return item.image;
    } else if (item.image && typeof item.image === 'number') {
      return item.image;
    }
    return FALLBACK_IMAGE;
  };

  const renderItem = ({ item, index }) => {
    const imageSource = getImageSource(item);

    return (
      <View style={[styles.slide, { width }]}>
     
        <View style={styles.circleImageContainer}>
          <View style={styles.circle}>
            <Image 
              source={imageSource} 
              style={styles.circleImage}
              resizeMode="cover"
              onError={(error) => console.log('Image loading error:', error)}
            />
          </View>
        </View>

       
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>

        
        <View style={styles.dotsMiddleContainer}>
          {renderDots()}
        </View>

        {item.hasOptions && (
          <View style={styles.roleButtonsContainer}>
            <TouchableOpacity 
              style={[
                styles.roleButton, 
                styles.farmerButton,
                selectedRole === 'farmer' && styles.roleButtonSelected
              ]} 
              onPress={() => handleRoleSelection('farmer')}
            >
              <Text style={[
                styles.roleButtonText,
                selectedRole === 'farmer' && styles.roleButtonTextSelected
              ]}>
                As a Farmer
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[
                styles.roleButton, 
                styles.buyerButton,
                selectedRole === 'buyer' && styles.roleButtonSelected
              ]} 
              onPress={() => handleRoleSelection('buyer')}
            >
              <Text style={[
                styles.roleButtonText,
                selectedRole === 'buyer' && styles.roleButtonTextSelected
              ]}>
                As a Buyer
              </Text>
            </TouchableOpacity>
          </View>
        )}

        
        <View style={styles.footer}>
          {item.skipText && (
            <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
              <Text style={styles.skipText}>{item.skipText}</Text>
            </TouchableOpacity>
          )}
          
          {item.nextText && (
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.nextText}>{item.nextText}</Text>
            </TouchableOpacity>
          )}
          
          
          {!item.nextText && !item.hasOptions && <View style={styles.spacer} />}
        </View>
      </View>
    );
  };

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {onboardingData.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 20, 8],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: ['#C8E6C9', '#2D5A3D', '#C8E6C9'],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                {
                  width: dotWidth,
                  opacity: opacity,
                  backgroundColor: backgroundColor,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        scrollEventThrottle={16}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FBF1',
  },
  slide: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 40,
  },
  circleImageContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 30,
  },
  circle: {
    width: width * 0.9,
    height: width * 0.9,
    borderRadius: width * 0.50, 
    backgroundColor: '#E8F5E8',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#F7FBF1',
 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  circleImage: {
    width: '100%',
    height: '100%',
    borderRadius: width * 0.15,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '',
    lineHeight: 34,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  
  roleButtonsContainer: {
    position: 'absolute',
    bottom: 100,
    left: 24,
    right: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  roleButton: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#2D5A3D',
    backgroundColor: '#0D631B',
    marginHorizontal: 8,
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
  roleButtonSelected: {
    backgroundColor: '#FFFFFF',
  },
  farmerButton: {
    marginLeft: 1,
  },
  buyerButton: {
    marginRight: -1,
  },
  roleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  roleButtonTextSelected: {
    color: '#0D631B',
  },
  
  dotsMiddleContainer: {
    position: 'absolute',
    bottom: 210,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    color:'#1B6D24'
  },
  
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 24,
    right: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipButton: {
    padding: 15,
   
  },
  skipText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  nextButton: {
    backgroundColor: '#2D5A3D',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    minWidth: 100,
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
  nextText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  spacer: {
    width: 100,
  },
});