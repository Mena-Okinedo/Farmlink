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
  Image,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const FarmerSignUpScreen = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [receiveUpdates, setReceiveUpdates] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    if (!formData.email.trim()) {
      Alert.alert('Error', 'Please enter your email address');
      return false;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return false;
    }

    if (!formData.password) {
      Alert.alert('Error', 'Please create a password');
      return false;
    }

    if (formData.password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return false;
    }

    if (!formData.confirmPassword) {
      Alert.alert('Error', 'Please confirm your password');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return false;
    }

    if (!agreedToTerms) {
      Alert.alert('Error', 'Please agree to the Terms of Service and Privacy Policy');
      return false;
    }

    return true;
  };

  const handleCreateAccount = () => {
    if (validateForm()) {
      Alert.alert('Success', 'Account created successfully!');
      console.log('Form data:', formData);
      console.log('Agreed to terms:', agreedToTerms);
      console.log('Receive updates:', receiveUpdates);
      router.push('farmerinfo');
    }
  };

  const handleBack = () => {
    router.back(); 
  };

  const handleLogin = () => {
    router.push('farmerlogin');
  };

  const handleGoogleSignUp = () => {
    console.log('Google sign up clicked');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      
      <View style={styles.header}>
        
        <View style={styles.topSection}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Image 
                source={require('../assets/images/logo.png')}
                style={styles.logoImage} 
                resizeMode="contain"
              />   
            </View>
            <View style={styles.headerText}>
              <Text style={styles.appName}>Farmlink</Text>
              <Text style={styles.country}>Nigeria</Text>
            </View>
          </View>
        </View>
        
       
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#2D5A3D" />
         
        </TouchableOpacity>
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
            <Text style={styles.title}>Create Your Account</Text>
            <Text style={styles.subtitle}>
              Join the agricultural revolution
            </Text>
          </View>

       
          <View style={styles.formContainer}>
            
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
              <Text style={styles.label}>Password *</Text>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Create a strong password"
                  placeholderTextColor="#999"
                  secureTextEntry={!showPassword}
                  value={formData.password}
                  onChangeText={(text) => handleInputChange('password', text)}
                />
                <TouchableOpacity 
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons 
                    name={showPassword ? "eye-off" : "eye"} 
                    size={20} 
                    color="#666" 
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirm Password *</Text>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Confirm your password"
                  placeholderTextColor="#999"
                  secureTextEntry={!showConfirmPassword}
                  value={formData.confirmPassword}
                  onChangeText={(text) => handleInputChange('confirmPassword', text)}
                />
                <TouchableOpacity 
                  style={styles.eyeIcon}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <Ionicons 
                    name={showConfirmPassword ? "eye-off" : "eye"} 
                    size={20} 
                    color="#666" 
                  />
                </TouchableOpacity>
              </View>
            </View>

           
            <View style={styles.checkboxGroup}>
              <View style={styles.checkboxContainer}>
                <TouchableOpacity 
                  style={[
                    styles.checkbox,
                    agreedToTerms && styles.checkboxChecked
                  ]}
                  onPress={() => setAgreedToTerms(!agreedToTerms)}
                >
                  {agreedToTerms && (
                    <Ionicons name="checkmark" size={16} color="#fff" />
                  )}
                </TouchableOpacity>
                <Text style={styles.checkboxLabel}>
                  I agree to the <Text style={styles.linkText}>Terms of Service</Text> and <Text style={styles.linkText}>Privacy Policy</Text> *
                </Text>
              </View>

              <View style={styles.checkboxContainer}>
                <TouchableOpacity 
                  style={[
                    styles.checkbox,
                    receiveUpdates && styles.checkboxChecked
                  ]}
                  onPress={() => setReceiveUpdates(!receiveUpdates)}
                >
                  {receiveUpdates && (
                    <Ionicons name="checkmark" size={16} color="#fff" />
                  )}
                </TouchableOpacity>
                <Text style={styles.checkboxLabel}>
                  Send me updates, farming tips, and special offers
                </Text>
              </View>
            </View>

          
            <View style={styles.divider} />

            
            <TouchableOpacity 
              style={[
                styles.createAccountButton,
                (!formData.email || !formData.password || !formData.confirmPassword || !agreedToTerms) && 
                styles.createAccountButtonDisabled
              ]} 
              onPress={handleCreateAccount}
              disabled={!formData.email || !formData.password || !formData.confirmPassword || !agreedToTerms}
            >
              <Text style={styles.createAccountText}>Create Account</Text>
            </TouchableOpacity>

         
            <View style={styles.orContainer}>
              <View style={styles.orLine} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.orLine} />
            </View>

          
            <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignUp}>
              <Image 
                source={require('../assets/images/playstore.png')}
                style={styles.playImage}
              />
              <Text style={styles.googleButtonText}>Google</Text>
            </TouchableOpacity>

            
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.loginLink}>Login here</Text>
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
  
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    },
  topSection: {
    marginBottom: 16,
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
    marginRight: 10, 
  },
  logoImage: {
    width: 201,
    height: 201,
    left: 40,
    top:15
  },
  headerText: {
    alignItems: 'flex-start',
    left:-10,
    top:-4
  },
  appName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#007A44',
  },
  country: {
    fontSize: 13,
    color: '#007A44',
    fontWeight: '500'
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12, 
    alignSelf: 'flex-start',
    marginLeft: -8, 
  },
  backText: {
    fontSize: 16,
    color: '#2D5A3D',
    marginLeft: 8,
    fontWeight: '500',
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
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9ECEF',
    borderRadius: 8,
    backgroundColor: '#F8F9FA',
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#333',
  },
  eyeIcon: {
    padding: 10,
  },
  checkboxGroup: {
    marginBottom: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#2D5A3D',
    marginRight: 12,
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#2D5A3D',
    borderColor: '#2D5A3D',
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  linkText: {
    color: '#2D5A3D',
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#E9ECEF',
    marginVertical: 24,
  },
  createAccountButton: {
    backgroundColor: '#2D5A3D',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  createAccountButtonDisabled: {
    backgroundColor: '#A0A0A0',
    opacity: 0.6,
  },
  createAccountText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E9ECEF',
  },
  orText: {
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E9ECEF',
    borderRadius: 25,
    paddingHorizontal: 32,
    paddingVertical: 14,
    backgroundColor: '#fff',
    marginBottom: 24,
  },
  playImage: {
    width: 20,
    height: 20,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginLeft: 12,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
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
});

export default FarmerSignUpScreen;