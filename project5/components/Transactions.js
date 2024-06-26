import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../context/ThemeContext';

const Transaction = ({ job }) => {
  const { theme, isDarkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.card]}>
      <View style={[styles.logoContainer, { backgroundColor: theme.logoBackground }]}>
        <Image source={job.logo} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: theme.text }]}>{job.title}</Text>
        <Text style={[styles.nature, { color: theme.subText }]}>{job.nature}</Text>
      </View>
      <View style={styles.salaryContainer}>
        <Text style={[styles.salary, { color: theme.text }]}>{job.salary}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  logoContainer: {
    borderRadius: 50,
    padding: 10,
    marginRight: 10,
  },
  logo: {
    width: 30,
    height: 30,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nature: {
    fontSize: 14,
  },
  salaryContainer: {
    alignItems: 'flex-end',
  },
  salary: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Transaction;
