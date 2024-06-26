// HomeScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CreditCard from '../components/CreditCard';
import Transaction from '../components/Transactions';
import ActionButtons from '../components/ActionButtons';
import { ThemeContext } from '../context/ThemeContext';

const tax = require('../assets/images/tax.png');
const applelight = require('../assets/images/applelight.png');
const money = require('../assets/images/money.png');
const spotify = require('../assets/images/spotify.png');
const cart = require('../assets/images/carts.png');

const creditCard = [
  { id: 'credit-1', title: 'Software Engineer', nature: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', image: spotify, backgroundColor: '#25253d'},
];

const cards = [
  { id: 'job-1', title: 'Apple Store', nature: 'Entertainment', salary: '$96', logo: applelight},
  { id: 'job-2', title: 'Spotify', nature: 'Music', salary: '$84,0',  logo: spotify },
  { id: 'job-3', title: 'Money Transfer', nature: 'Transaction', salary: '$86',  logo: money },
  { id: 'job-4', title: 'Grocery', nature: 'Shopping', salary: '$120,',  logo: cart },
  { id: 'job-5', title: 'Tax & Bills', nature: 'expenses', salary: '$78,',  logo: tax },
];

export default function HomeScreen({ route }) {
  const { theme } = useContext(ThemeContext);

  const renderHeader = () => (
    <View style={styles.profileContainer}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
      </View>
      <View>
        <Text style={[styles.welcometext, { color: theme.profileText }]}>Welcome back,</Text>
        <Text style={[styles.profileName, { color: theme.text }]}>Eric Atsu</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={[styles.searchIcon, { backgroundColor: theme.buttonBackground }]}>
          <Ionicons name="search" size={25} color={theme.iconColor} />
        </View>
      </View>
    </View>
  );

  const renderFeaturedCard = ({ item }) => <CreditCard job={item} />;

  const renderJobCard = ({ item }) => <Transaction job={item} />;



  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            {renderHeader()}
            <FlatList
              data={creditCard}
              renderItem={renderFeaturedCard}
              style={styles.featuredList}
            />
            <ActionButtons />
        <View style={styles.transactionsHeaderContainer}>
              <Text style={[styles.transactionsTitle, { color: theme.text }]}>Transactions</Text>
              <Text style={[styles.seeAllLink, { color: theme.bluet }]}>See All</Text>
        </View>
          </>
        }
        renderItem={renderJobCard}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  transactionsHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  transactionsTitle: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  seeAllLink: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    marginRight: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  welcometext: {
    fontSize: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    marginLeft: 'auto',
  },
  searchIcon: {
    padding: 15,
    borderRadius: 50,
  },
  featuredList: {
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 16,
  },
});
