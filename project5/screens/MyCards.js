import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const MyCards = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.headerTitle, { color: theme.text }]}>Cards</Text>
      <View style={styles.cardContainer}>
        <View style={[styles.card, { backgroundColor: theme.logoBackground }]}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>STANDARD</Text>
          <Text style={[styles.cardType, { color: theme.subText }]}>Master card</Text>
          <Text style={[styles.cardNumber, { color: theme.text }]}>2332 7352 3324 6522</Text>
          <View style={styles.cardDetails}>
            <View>
              <Text style={[styles.cardLabel, { color: theme.subText }]}>VALID DATE</Text>
              <Text style={[styles.cardValue, { color: theme.text }]}>07/23</Text>
            </View>
            <Text style={[styles.cardHolder, { color: theme.text }]}>SAJIDOR RAHMAN</Text>
          </View>
        </View>
      </View>
      <View style={styles.form}>
        <Text style={[styles.label, { color: theme.text }]}>Card Number</Text>
        <TextInput style={[styles.input, { color: theme.text, borderColor: theme.border }]} value="2332 7352 3324 6522" />
        <Text style={[styles.label, { color: theme.text }]}>Card Holder Name</Text>
        <TextInput style={[styles.input, { color: theme.text, borderColor: theme.border }]} value="Sajidor Rahman" />
        <View style={styles.row}>
          <View style={styles.half}>
            <Text style={[styles.label, { color: theme.text }]}>Expire Date</Text>
            <TextInput style={[styles.input, { color: theme.text, borderColor: theme.border }]} value="07/23" />
          </View>
          <View style={styles.half}>
            <Text style={[styles.label, { color: theme.text }]}>CVC/CVV2</Text>
            <TextInput style={[styles.input, { color: theme.text, borderColor: theme.border }]} value="***" />
          </View>
        </View>
        <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonBackground }]}>
          <Text style={[styles.buttonText, { color: theme.text }]}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    borderRadius: 12,
    padding: 20,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  cardType: {
    fontSize: 16,
    marginBottom: 20,
  },
  cardNumber: {
    fontSize: 24,
    letterSpacing: 2,
    marginBottom: 20,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLabel: {
    fontSize: 12,
  },
  cardValue: {
    fontSize: 16,
    marginTop: 5,
  },
  cardHolder: {
    fontSize: 16,
  },
  form: {
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  half: {
    width: '48%',
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyCards;
