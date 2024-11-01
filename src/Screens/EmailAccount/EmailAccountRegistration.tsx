import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class EmailAccountRegistration extends Component {
    render() {
        return (
            <View style={styles.container}>

                {/* Title */}
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
                    <Image
                        style={{ height: 90, width: 250, marginBottom: 20 }}
                        source={{
                            uri: 'https://lovedky.com/cdn/shop/files/dky_logo_with_wings_white-01.png',
                        }} />
                </View>


                {/* Header */}
                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Welcome to LoveDKY</Text>
                    <Text style={{ color: 'white', fontSize: 15, marginTop: 5, fontStyle: 'italic' }}>Register Yourself to access the inventory</Text>
                </View>

                {/* Username Input */}
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#555" />
                </View>

                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#555" />
                </View>

                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Number" placeholderTextColor="#555" />
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#555" secureTextEntry />
                    <Icon name="visibility-off" size={20} color="#555" style={styles.icon} />
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#555" secureTextEntry />
                    <Icon name="visibility-off" size={20} color="#555" style={styles.icon} />
                </View>

                {/* Forgot Password */}
                {/* <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity> */}

                {/* Login Button */}
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginText}>Register</Text>
                </TouchableOpacity>

                {/* Footer Text */}
                <Text style={styles.footerText}>
                    Have an Account? <Text onPress={() => this.props.navigation.navigate('Login')} style={{ fontWeight: 'bold', color: 'white' }}> Login </Text>
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
    },
    backButton: {

    },
    tinyLogo: {
        height: '10%', width: '10%', backgroundColor: 'yellow'
    },
    title: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
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
        color: 'grey',
        fontSize: 15,
        textAlign: 'center',

    },
    learnMore: {
        color: 'white',
        textDecorationLine: 'underline',
    },
})