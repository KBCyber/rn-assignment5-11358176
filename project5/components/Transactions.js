import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Transaction = ({ job }) => {
  return (
   
    
    <View style={styles.card}>
      <View style={styles.logoContainer}>
        <Image source={job.logo} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.company}>{job.company}</Text>
      </View>
      <View style={styles.salaryContainer}>
        <Text style={styles.salary}>{job.salary}</Text>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
    marginTop: 10,
  },
  logoContainer: {
    backgroundColor: '#fff',
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
    color: '#333',
  },
  company: {
    fontSize: 14,
    color: '#666',
  },
  salaryContainer: {
    alignItems: 'flex-end',
  },
  salary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Transaction;
