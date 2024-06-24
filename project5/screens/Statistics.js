import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Statistics = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Statistics Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafd',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Statistics;
