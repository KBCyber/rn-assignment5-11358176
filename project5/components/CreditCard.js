import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const CreditCard = () => {
  return (
    <View style={styles.bg}>
    <ImageBackground 
    source={require('../assets/images/globe.png')} 
    style={styles.card}
    imageStyle={styles.cardBackground}
  >
    <View style={styles.card}>
      <View style={styles.chipContainer}>
        <Image source={require('../assets/images/chip.png')} style={styles.chip} />
        <Image source={require('../assets/images/wifi-01.png')} style={styles.chip} />
      </View>
      <View style={styles.cardNumberContainer}>
        <Text style={styles.cardNumber}>4562</Text>
        <Text style={styles.cardNumber}>1122</Text>
        <Text style={styles.cardNumber}>4595</Text>
        <Text style={styles.cardNumber}>7852</Text>
      </View>
      <View style={styles.cardInfoContainer}>
        <View style={styles.sec}>
          <View>
            <Text style={styles.cardname}>AR Jonson</Text>
            <Text style={styles.cardLabel}>Expiry Date</Text>
            <Text style={styles.cardDetail}>24/2000</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.cardname}></Text>
            <Text style={styles.cardLabel}>CVV</Text>
            <Text style={styles.cardDetail}>6986</Text>
          </View>
        </View>
        <View style={styles.mastercardContainer}>
        <Image source={require('../assets/images/mastercard.png')} style={styles.mastercardLogo} />
        <Text style={styles.mastercardText}>Mastercard</Text>
      </View>
      </View>
    </View>
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bg:{
    marginBottom: 20,
    backgroundColor: '#27273d',
    borderRadius: 15,
    width: '100%',
  },
  card: {
    borderRadius: 18,
    padding: 8,
    height: 200,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  sec:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail:{
    paddingLeft: 30,
  },
  chipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chip: {
    width: 30,
    height: 20,
  },
  cardNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  cardNumber: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#FFF',
  },
  cardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cardLabel: {
    fontSize: 12,
    color: '#AAA',
  },
  cardname: {
    fontSize: 15,
    color: '#fff',
  },
  cardDetail: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 5,
  },
  mastercardContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
  },
  mastercardLogo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  mastercardText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default CreditCard;
