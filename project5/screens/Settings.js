import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Language</Text>
        <Ionicons name="chevron-forward" size={24} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>My Profile</Text>
        <Ionicons name="chevron-forward" size={24} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Contact Us</Text>
        <Ionicons name="chevron-forward" size={24} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Change Password</Text>
        <Ionicons name="chevron-forward" size={24} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Privacy Policy</Text>
        <Ionicons name="chevron-forward" size={24} color="#333" />
      </TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.itemText}>Theme</Text>
        <Switch />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Settings;
