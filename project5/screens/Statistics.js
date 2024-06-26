import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const { width } = Dimensions.get('window');

const Statistics = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.totalIncome, { color: theme.text }]}>Statistics</Text>
        <Text style={[styles.incomeChange, { color: theme.subText }]}>Your Accumulated Data For All Purchases</Text>
      </View>

      <View style={[styles.salesContainer, { backgroundColor: theme.logoBackground }]}>
        <Text style={[styles.salesText, { color: theme.text }]}>Total Purchases</Text>
        <Text style={[styles.salesAmount, { color: theme.text }]}>4,756 Purchases</Text>
      </View>

      <View style={styles.chartWrapper}>
        <View style={[styles.chartContainer, { backgroundColor: theme.logoBackground }]}>
          <Text style={[styles.chartTitle, { color: theme.text }]}>Purchase Stats</Text>
          <Text style={[styles.chartSubTitle, { color: theme.subText }]}>01 Jan - 30 Aug</Text>
          <View style={styles.chart}>
            <Text style={[styles.chartDuration, { color: theme.subText }]}>8 Month</Text>
            <View style={styles.barsContainer}>
              <View style={[styles.bar, styles.barLow, { backgroundColor: theme.sbars }]}>
                <Text style={[styles.barText, { color: theme.iconColor }]}>50</Text>
              </View>
              <View style={[styles.bar, styles.barMedium, { backgroundColor: theme.mbars }]}>
                <Text style={[styles.barText, { color: theme.iconColor }]}>100</Text>
              </View>
              <View style={[styles.bar, styles.barHigh, { backgroundColor: theme.lbars }]}>
                <Text style={[styles.barText, { color: theme.iconColor }]}>150</Text>
              </View>
              <View style={[styles.bar, styles.barHigh, { backgroundColor: theme.lbars }]}>
                <Text style={[styles.barText, { color: theme.iconColor }]}>150</Text>
              </View>
              <View style={[styles.bar, styles.barMedium, { backgroundColor: theme.mbars }]}>
                <Text style={[styles.barText, { color: theme.iconColor }]}>100</Text>
              </View>
              <View style={[styles.bar, styles.barLow, { backgroundColor: theme.mbars }]}>
                <Text style={[styles.barText, { color: theme.iconColor }]}>50</Text>
              </View>
              <View style={[styles.bar, styles.barMedium, { backgroundColor: theme.mbars }]}>
                <Text style={[styles.barText, { color: theme.iconColor }]}>100</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bestSalesContainer}>
        <View style={[styles.saleItem, { backgroundColor: theme.logoBackground }]}>
          <Text style={[styles.saleTitle, { color: theme.text }]}>Groceries & Bills</Text>
          <Text style={[styles.saleDetails, { color: theme.subText }]}> 42% Withdrawals</Text>
          <Text style={[styles.saleAmount, { color: theme.profileText }]}>$ 82,500</Text>
        </View>
        <View style={[styles.saleItem, { backgroundColor: theme.logoBackground }]}>
          <Text style={[styles.saleTitle, { color: theme.text }]}>Feeding & Tax</Text>
          <Text style={[styles.saleDetails, { color: theme.subText }]}>18% Totals</Text>
          <Text style={[styles.saleAmount, { color: theme.profileText }]}>$ 32,400</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  totalIncome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  incomeChange: {
    fontSize: 16,
  },
  salesContainer: {
    borderRadius: 12,
    padding: 20,
    alignItems: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  salesText: {
    fontSize: 18,
  },
  salesAmount: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  chartWrapper: {
    alignItems: 'center',
  },
  chartContainer: {
    borderRadius: 12,
    padding: 20,
    paddingBottom: 40,
    width: width * 0.9,
    alignItems: 'center',
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  chartSubTitle: {
    fontSize: 14,
    marginBottom: 20,
  },
  chartDuration: {
    fontSize: 14,
    marginBottom: 10,
    alignSelf: 'flex-end',
  },
  barsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end', // Align bars at the bottom
    width: '100%',
    height: 150, // Set a height for the container
  },
  bar: {
    width: (width - 100) / 7,
    borderRadius: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 2,
    position: 'relative',
  },
  barLow: {
    height: 50,
  },
  barMedium: {
    height: 100,
  },
  barHigh: {
    height: 150,
    borderRadius: 5,
  },
  barText: {
    position: 'absolute',
    bottom: -20,
    fontSize: 10,
    color: '#fff',
  },
  bestSalesContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  saleItem: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
  },
  saleTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  saleDetails: {
    fontSize: 12,
    marginBottom: 15,
  },
  saleAmount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Statistics;
