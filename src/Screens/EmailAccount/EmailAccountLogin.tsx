import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class EmailAccountLogin extends Component {
    render() {

        return (
            <View style={styles.container}>
            {/* Back Arrow */}
            <TouchableOpacity style={styles.backButton}>
              {/* <Icon name="arrow-back" size={24} color="white" /> */}
            </TouchableOpacity>
      
            {/* Title */}
            <Text style={styles.title}>Log in to LoveDKY</Text>
      
            {/* Email Input */}
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="hello@company.com" placeholderTextColor="#555" />
            </View>
      
            {/* Password Input */}
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Your password" placeholderTextColor="#555" secureTextEntry />
              {/* <Icon name="visibility-off" size={20} color="#555" style={styles.icon} /> */}
            </View>
      
            {/* Forgot Password */}
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
      
            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
      
            {/* OR Divider */}
            <View style={styles.divider}>
              <View style={styles.line} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.line} />
            </View>
      
            {/* Social Buttons */}
            <TouchableOpacity style={styles.socialButton}>
              {/* <FontAwesome name="apple" size={20} color="white" /> */}
              <Text style={styles.socialText}>Continue with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              {/* <FontAwesome name="google" size={20} color="white" /> */}
              <Text style={styles.socialText}>Continue with Google</Text>
            </TouchableOpacity>
      
            {/* Footer Text */}
            <Text style={styles.footerText}>
              Scale uses cookies for analytics personalized content and ads. By using Scale's services you agree to this use of cookies. <Text style={styles.learnMore}>Learn more</Text>
            </Text>
          </View>
        );
    }
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
      },
      backButton: {
        marginBottom: 20,
      },
      title: {
        alignSelf:'center',
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
      },
      label: {
        color: 'white',
        fontSize: 14,
        marginVertical: 10,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
      },
      input: {
        flex: 1,
        color: 'white',
        paddingVertical: 10,
      },
      icon: {
        padding: 5,
      },
      forgotPassword: {
        color: 'green',
        marginVertical: 10,
      },
      loginButton: {
        backgroundColor: 'white',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 20,
      },
      loginText: {
        color: 'black',
        fontWeight: 'bold',
      },
      divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
      },
      line: {
        flex: 1,
        height: 1,
        backgroundColor: '#555',
      },
      orText: {
        color: '#555',
        marginHorizontal: 10,
      },
      socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
        paddingVertical: 12,
        borderRadius: 8,
        marginBottom: 10,
        paddingHorizontal: 20,
      },
      socialText: {
        color: 'white',
        marginLeft: 10,
      },
      footerText: {
        color: '#555',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20,
      },
      learnMore: {
        color: 'white',
        textDecorationLine: 'underline',
      },
})