import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../context/ThemeContext';


const Settings = () => {
  const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.text }]}>Settings</Text>
      <TouchableOpacity style={styles.item}>
        <Text style={[styles.itemText, { color: theme.text }]}>Language</Text>
        <Ionicons name="chevron-forward" size={24} color={theme.iconColor} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={[styles.itemText, { color: theme.text }]}>My Profile</Text>
        <Ionicons name="chevron-forward" size={24} color={theme.iconColor} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={[styles.itemText, { color: theme.text }]}>Contact Us</Text>
        <Ionicons name="chevron-forward" size={24} color={theme.iconColor} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={[styles.itemText, { color: theme.text }]}>Change Password</Text>
        <Ionicons name="chevron-forward" size={24} color={theme.iconColor} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={[styles.itemText, { color: theme.text }]}>Privacy Policy</Text>
        <Ionicons name="chevron-forward" size={24} color={theme.iconColor} />
      </TouchableOpacity>
      <View style={styles.item}>
        <Text style={[styles.itemText, { color: theme.text }]}>Theme</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          thumbColor={isDarkMode ? '#fff' : '#ffffff'}
          trackColor={{ false: '#767577', true: '#1ce830' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
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
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#32363935',
  },
  itemText: {
    fontSize: 16,
  },
});

export default Settings;
