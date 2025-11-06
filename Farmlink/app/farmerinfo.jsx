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
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';


const FarmerProfileScreen = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    location: '',
    businessName: '',
    operationDescription: '',
  });
  
  const router = useRouter();
  

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    
    console.log('Farmer profile data:', formData);
    // API call here
    router.push('farmersdashboard');
  };

  const handleBack = () => {
    router.back();
  };


  const wordCount = formData.operationDescription.trim().split(/\s+/).filter(word => word.length > 0).length;
  const maxWords = 500;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <KeyboardAvoidingView 
        style={styles.keyboardAvoid}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          
          <View style={styles.logoSection}>
            <View style={styles.logoContainer}>
              <View style={styles.logo}>
               <Image source = {require ('../assets/images/logo.png')}
                 style={styles.logoImage} resizeMode="contain"/> 
              </View>
              <View style = {styles.headerText}>
              <Text style={styles.appName}>Farmlink</Text>
              <Text style={styles.country}>Nigeria</Text>
              </View>
            </View>
          </View>

          
          <View style={styles.titleSection}>
            <Text style={styles.title}>Tell Us About Yourself</Text>
            <Text style={styles.subtitle}>
              We need some basic information to set up your account
            </Text>
          </View>

          
          <View style={styles.formContainer}>
        
            <View style={styles.inputGroup}>
              <Text style={styles.label}>First Name *</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your first name"
                placeholderTextColor="#999"
                value={formData.firstName}
                onChangeText={(text) => handleInputChange('firstName', text)}
              />
            </View>

            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Last Name *</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your last name"
                placeholderTextColor="#999"
                value={formData.lastName}
                onChangeText={(text) => handleInputChange('lastName', text)}
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
              <Text style={styles.label}>Location *</Text>
              <TextInput
                style={styles.textInput}
                placeholder="City, State/Province"
                placeholderTextColor="#999"
                value={formData.location}
                onChangeText={(text) => handleInputChange('location', text)}
              />
            </View>

            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Business/Farm Name</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Optional: Your business or farm name"
                placeholderTextColor="#999"
                value={formData.businessName}
                onChangeText={(text) => handleInputChange('businessName', text)}
              />
            </View>

            
            <View style={styles.inputGroup}>
              <View style={styles.descriptionHeader}>
                <Text style={styles.label}>Tell us about your operation</Text>
                <Text style={styles.wordCount}>
                  {wordCount}/{maxWords} words
                </Text>
              </View>
              <TextInput
                style={[styles.textInput, styles.textArea]}
                placeholder="Describe your farming operation, types of crops or livestock, farming methods, experience, and any certifications you have..."
                placeholderTextColor="#999"
                multiline={true}
                numberOfLines={6}
                textAlignVertical="top"
                value={formData.operationDescription}
                onChangeText={(text) => {
                  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
                  if (words.length <= maxWords) {
                    handleInputChange('operationDescription', text);
                  }
                }}
                maxLength={3000} 
              />
              {wordCount >= maxWords && (
                <Text style={styles.wordLimitWarning}>
                  Maximum {maxWords} words reached
                </Text>
              )}
            </View>

           
            <View style={styles.footer}>
              <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Text style={styles.backButtonText}>Back</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.continueButton} onPress={handleSubmit}>
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

 logoSection: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
    left:20
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007A44',
  },
  country: {
    fontSize: 13,
    color: '#007A44',
    fontWeight: 500
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 30,
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
    marginBottom: 20,
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
  textArea: {
    height: 120,
    paddingTop: 12,
    textAlignVertical: 'top',
  },
  descriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  wordCount: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  wordLimitWarning: {
    fontSize: 12,
    color: '#FF6B6B',
    fontWeight: '500',
    marginTop: 4,
    textAlign: 'right',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  backButton: {
    paddingHorizontal: 32,
    paddingVertical: 15,
    borderWidth: 2,
    borderColor: '#2D5A3D',
    borderRadius: 25,
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
    borderRadius: 25,
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
});

export default FarmerProfileScreen;