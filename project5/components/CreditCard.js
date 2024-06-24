import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CreditCard = ({ job }) => {
  return (
    <View style={[styles.card, { backgroundColor: job.backgroundColor }]}>
      <View style={styles.cardContent}>
        <Image source={job.image} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{job.title}</Text>
          <Text style={styles.company}>{job.company}</Text>
        </View>
      </View>
      <View style={styles.alignmain}>
        <Text style={styles.salary}>{job.salary}</Text>
        <Text style={styles.location}>{job.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    padding: 10,
    maxWidth: '100%',
    height: 200,
    justifyContent: 'center',
    marginBottom: 30,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 20,
  },
  alignmain: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 35,
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  company: {
    fontSize: 16,
    color: '#f2f2f3',
    marginBottom: 5,
  },
  salary: {
    fontSize: 18,
    color: '#FFF',
    marginTop: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 18,
    color: '#FFF',
    marginTop: 18,
    fontWeight: 'bold',
  },
});

export default CreditCard;
