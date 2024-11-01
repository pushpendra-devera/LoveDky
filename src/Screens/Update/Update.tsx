import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class Update extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Add Item</Text>
        </View>

        {/* Image Upload */}
        <TouchableOpacity style={styles.imageUpload}>
          <Image source={{ uri: 'https://img.icons8.com/ios/50/000000/image.png' }} style={styles.uploadIcon} />
        </TouchableOpacity>

        {/* Form Fields */}
        <Text style={styles.label}>Menu name</Text>
        <TextInput placeholder="Enter menu name" style={styles.input} />

        <Text style={styles.label}>Categories</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Select categories</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Add options</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Select categories</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Stock</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Select categories</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Price</Text>
        <TextInput placeholder="Enter price" style={styles.input} />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Upload</Text>
        </TouchableOpacity>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  loginButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
},
loginText: {
  color: 'black',
  fontWeight: 'bold',
},
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageUpload: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  uploadIcon: {
    width: 40,
    height: 40,
    tintColor: '#D3D3D3',
  },
  label: {
    fontSize: 14,
    color: '#A9A9A9',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#F8F8F8',
  },
  dropdown: {
    height: 40,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    marginBottom: 15,
  },
  dropdownText: {
    color: '#A9A9A9',
  },
});