import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Modal,
  FlatList,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  useRouter } from 'expo-router';


const BuyerSignUpScreen = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    lookingFor: '',
    deliveryLocation: '',
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const router = useRouter();

  const agriculturalProducts = [
    'Vegetables',
    'Fruits',
    'Grains & Cereals',
    'Livestock',
    'Dairy Products',
    'Poultry',
    'Seafood',
    'Herbs & Spices',
    'Tubers',
    'Legumes',
    'Nuts',
    'Oil Seeds',
    'Coffee & Tea',
    'Cocoa',
    'Flowers',
    'Organic Products'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setFormData(prev => ({
      ...prev,
      lookingFor: product
    }));
    setShowDropdown(false);
  };

  const handleContinue = () => {
    
    console.log('Form data:', formData);
    router.push('Home');
    
 
  };

  const handleBack = () => {
    router.back();
  };

  const handleLogin = () => {
    
    router.push('')
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
  
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          
        </TouchableOpacity>
        
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
             <Image source = {require ('../assets/images/logo.png')}
            style={styles.logoImage} resizeMode="contain"/> 
          </View>
          <View tyle={styles.headerText}>
          <Text style={styles.appName}>Farmlink</Text>
            <Text style={styles.country}>Nigeria</Text>
            </View>
        </View>
        
        <View style={styles.headerSpacer} />
      </View>

      <KeyboardAvoidingView 
        style={styles.keyboardAvoid}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          
          <View style={styles.titleSection}>
            <Text style={styles.title}>Buy Fresh, Buy Local</Text>
            <Text style={styles.subtitle}>
              Fresh produce from verified farmers, delivered to you
            </Text>
          </View>

         
          <View style={styles.formContainer}>
         
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name *</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your name"
                placeholderTextColor="#999"
                value={formData.fullName}
                onChangeText={(text) => handleInputChange('fullName', text)}
              />
            </View>

           
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email Address *</Text>
              <TextInput
                style={styles.textInput}
                placeholder="your.email@example.com"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={formData.email}
                onChangeText={(text) => handleInputChange('email', text)}
              />
            </View>

          
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone Number *</Text>
              <TextInput
                style={styles.textInput}
                placeholder="+1 (555) 123-4567"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
                value={formData.phoneNumber}
                onChangeText={(text) => handleInputChange('phoneNumber', text)}
              />
            </View>

            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>What are you looking to buy? *</Text>
              <TouchableOpacity 
                style={styles.selectInput}
                onPress={() => setShowDropdown(true)}
              >
                <Text style={[
                  styles.selectText,
                  selectedProduct && styles.selectTextSelected
                ]}>
                  {selectedProduct || 'Select'}
                </Text>
                <Ionicons name="chevron-down" size={20} color="#666" />
              </TouchableOpacity>
            </View>

            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Delivery Location *</Text>
              <TextInput
                style={styles.textInput}
                placeholder="City, State"
                placeholderTextColor="#999"
                value={formData.deliveryLocation}
                onChangeText={(text) => handleInputChange('deliveryLocation', text)}
              />
            </View>

            

            
            
            <View style={styles.footer}>
              <TouchableOpacity style={styles.backButtonFooter} onPress={handleBack}>
                <Text style={styles.backButtonText}>Back</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.continueButton} onPress={handleContinue}
               >
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>

          
        </ScrollView>
      </KeyboardAvoidingView>

      
      <Modal
        visible={showDropdown}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowDropdown(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.dropdownContainer}>
            <View style={styles.dropdownHeader}>
              <Text style={styles.dropdownTitle}>Select Product Category</Text>
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={() => setShowDropdown(false)}
              >
                <Ionicons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>
            
            <FlatList
              data={agriculturalProducts}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.dropdownItem,
                    selectedProduct === item && styles.dropdownItemSelected
                  ]}
                  onPress={() => handleProductSelect(item)}
                >
                  <Text style={[
                    styles.dropdownItemText,
                    selectedProduct === item && styles.dropdownItemTextSelected
                  ]}>
                    {item}
                  </Text>
                  {selectedProduct === item && (
                    <Ionicons name="checkmark" size={20} color="#2D5A3D" />
                  )}
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </Modal>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
   
  },
  backButton: {
    padding: 8,
   bottom: -30,
  right: 10
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    right: 150
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
    marginLeft:90,
    marginTop:30
  },
   headerText: {
        marginRight:10
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
  headerSpacer: {
    width: 40,
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2D5A3D',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  formContainer: {
    flex: 1,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D5A3D',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E9ECEF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    backgroundColor: '#F8F9FA',
    color: '#333',
  },
  selectInput: {
    borderWidth: 1,
    borderColor: '#E9ECEF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#F8F9FA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectText: {
    fontSize: 16,
    color: '#999',
  },
  selectTextSelected: {
    color: '#333',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  loginText: {
    fontSize: 14,
    color: '#666',
  },
  loginLink: {
    fontSize: 14,
    color: '#2D5A3D',
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#E9ECEF',
    marginVertical: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,

  },
  backButtonFooter: {
    paddingHorizontal: 32,
    paddingVertical: 15,
    borderWidth: 2,
    borderColor: '#2D5A3D',
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D5A3D',
  },
  continueButton: {
    paddingHorizontal: 32,
    paddingVertical: 15,
    backgroundColor: '#2D5A3D',
    borderRadius: 8,
    minWidth: 120,
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
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  attribution: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  attributionText: {
    fontSize: 12,
    color: '#999',
  },
  
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  dropdownContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '60%',
    paddingBottom: 20,
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  dropdownTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D5A3D',
  },
  closeButton: {
    padding: 4,
  },
  dropdownItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F8F9FA',
  },
  dropdownItemSelected: {
    backgroundColor: '#E8F5E8',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownItemTextSelected: {
    color: '#2D5A3D',
    fontWeight: '600',
  },
});

export default BuyerSignUpScreen;