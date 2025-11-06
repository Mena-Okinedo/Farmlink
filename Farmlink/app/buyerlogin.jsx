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
import {  useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogin = () => {
    
    Alert.alert('Success', 'Login successful!');
    console.log('Login data:', formData);
    console.log('Remember me:', rememberMe);
     router.push('Home')
    
    // API call here
  };

  const handleGoogleLogin = () => {
    
    console.log('Google login clicked');
  };

  
  const handleForgotPassword = () => {
    
   router.push('forgot-password');
  };

  const handleSignUp = () => {
   
    router.push('buyersignup');
  };

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
               style ={styles.logoImage}/>
              </View>
              <View style ={styles.headerText}>
              <Text style={styles.appName}>FarmLink</Text>
              <Text style={styles.country}>Nigeria</Text>
              </View>
            </View>
          </View>

          
          <View style={styles.titleSection}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>
              Login to your FarmLink account
            </Text>
          </View>

       
          <View style={styles.formContainer}>
           
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={formData.email}
                onChangeText={(text) => handleInputChange('email', text)}
              />
            </View>

         
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Enter your password"
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

            <View style={styles.rememberForgotContainer}>
              <TouchableOpacity 
                style={styles.rememberContainer}
                onPress={() => setRememberMe(!rememberMe)}
              >
                <View style={[
                  styles.checkbox,
                  rememberMe && styles.checkboxChecked
                ]}>
                  {rememberMe && (
                    <Ionicons name="checkmark" size={16} color="#fff" />
                  )}
                </View>
                <Text style={styles.rememberText}>Remember me</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot password ?</Text>
              </TouchableOpacity>
            </View>

            
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            

        
            <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
              <Image source = {require ('../assets/images/playstore.png')}
               style = {styles.playImage}/>
              <Text style={styles.googleButtonText}>Google</Text>
            </TouchableOpacity>

           
            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Don't have an account ? </Text>
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.signUpLink}>Sign up now</Text>
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
    color: '#2D5A3D',
  },
  country: {
    fontSize: 13,
    color: '#007A44',
    fontWeight: 500
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 40,
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
  rememberForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#2D5A3D',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#2D5A3D',
    borderColor: '#2D5A3D',
  },
  rememberText: {
    fontSize: 14,
    color: '#666',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#2D5A3D',
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#2D5A3D',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  
   playImage: {
    width: 20,
    height: 20,
   
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
  googleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginLeft: 12,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpText: {
    fontSize: 14,
    color: '#666',
  },
  signUpLink: {
    fontSize: 14,
    color: '#2D5A3D',
    fontWeight: '600',
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
  figmaLink: {
    fontSize: 12,
    color: '#2D5A3D',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;