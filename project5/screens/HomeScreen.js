import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CreditCard from '../components/CreditCard';
import Transaction from '../components/Transactions';

const facebookLogo = require('../assets/images/facebook.png');
const burgerKingLogo = require('../assets/images/burger.png');
const beatsLogo = require('../assets/images/beats.png');
const microsoftLogo = require('../assets/images/ms.png');
const cocaColaLogo = require('../assets/images/coke.png');
const teslaLogo = require('../assets/images/tesla.png');
const nikeLogo = require('../assets/images/nike.png');
const goldmanSachsLogo = require('../assets/images/goldman.png');

const creditCard = [
  { id: 'credit-1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', image: teslaLogo, backgroundColor: '#25253d'},
];

const popularJobs = [
  { id: 'job-1', title: 'Jr Executive', company: 'Burger King', salary: '$96', logo: burgerKingLogo },
  { id: 'job-2', title: 'Product Manager', company: 'Beats', salary: '$84,0',  logo: beatsLogo },
  { id: 'job-3', title: 'Product Manager', company: 'Facebook', salary: '$86',  logo: facebookLogo },
  { id: 'job-4', title: 'Software Developer', company: 'Microsoft', salary: '$120,',  logo: microsoftLogo },
  { id: 'job-5', title: 'Marketing Specialist', company: 'Coca Cola', salary: '$78,',  logo: cocaColaLogo },
  { id: 'job-6', title: 'HR Manager', company: 'Tesla', salary: '$110,', logo: teslaLogo },
  { id: 'job-7', title: 'Operations Manager', company: 'Nike', salary: '$92,', logo: nikeLogo },
  { id: 'job-8', title: 'Financial Analyst', company: 'Goldman Sachs', salary: '$105,', logo: goldmanSachsLogo },
];

export default function HomeScreen({ route }) {
  const renderHeader = () => (
    
    <View style={styles.profileContainer}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
      </View>
      <View>
        <Text style={styles.welcometext}>Welcome back,</Text>
        <Text style={styles.profileName}>Eric Atsu</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchIcon}>
          <Ionicons name="search" size={20} color="#000" />
        </View>
      </View>
    </View>
  );

  const renderFeaturedCard = ({ item }) => <CreditCard job={item} />;

  const renderJobCard = ({ item }) => <Transaction job={item} />;

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={[...creditCard, ...popularJobs]}
      renderItem={({ item }) => 
        item.id.startsWith('credit-') ? renderFeaturedCard({ item }) : renderJobCard({ item })
      }
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fafafd',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },
  profileName: {
    fontSize: 24,
    fontWeight: '700',
  },
  welcometext: {
    fontSize: 15,
    color: '#7e848d',
  },
  searchContainer: {
    marginLeft: 100,
    alignItems: 'center',
  },
  imageContainer: {
    width: 70,
    height: 55,
    position: 'relative',
  },
  searchIcon: {
    backgroundColor: '#f2f2f3',
    borderRadius: 100,
    width: 50,
    height: 50,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    fontSize: 14,
    color: 'blue',
  },
  featuredList: {
    paddingVertical: 10,
    paddingTop: 20,
  },
  popullarj: {},
});
