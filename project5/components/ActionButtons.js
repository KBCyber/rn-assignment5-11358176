import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

const ActionButtons = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <View style={[styles.button, { backgroundColor: theme.iconCircleBackground }]}>
        <View style={[styles.iconCircle, { backgroundColor: theme.iconColor2 }]}>
          <Ionicons name="arrow-up" size={30} color={theme.iconColor3} />
        </View>
        <Text style={[styles.buttonText, { color: theme.text }]}>Sent</Text>
      </View>
      <View style={[styles.button, { backgroundColor: theme.iconCircleBackground }]}>
        <View style={[styles.iconCircle, { backgroundColor: theme.iconColor2 }]}>
          <Ionicons name="arrow-down" size={30} color={theme.iconColor3} />
        </View>
        <Text style={[styles.buttonText, { color: theme.text }]}>Receive</Text>
      </View>
      <View style={[styles.button, { backgroundColor: theme.iconCircleBackground }]}>
        <View style={[styles.iconCircle, { backgroundColor: theme.iconColor2 }]}>
          <Ionicons name="cash" size={30} color={theme.iconColor3} />
        </View>
        <Text style={[styles.buttonText, { color: theme.text }]}>Loan</Text>
      </View>
      <View style={[styles.button, { backgroundColor: theme.iconCircleBackground }]}>
        <View style={[styles.iconCircle, { backgroundColor: theme.iconColor2 }]}>
          <Ionicons name="cloud-upload-outline" size={30} color={theme.iconColor3} />
        </View>
        <Text style={[styles.buttonText, { color: theme.text }]}>Topup</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center', 
    marginBottom: 20,
    marginTop: -20,
    maxWidth: '100%',
  },
  button: {
    alignItems: 'center',
    borderRadius: 50,
    width: 70, 
    justifyContent: 'center',
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default ActionButtons;
