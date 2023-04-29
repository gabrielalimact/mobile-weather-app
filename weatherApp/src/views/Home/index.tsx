import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { getResults } from '../../api/Weather/weatherService';
import { NextDaysTable } from './components/NextDaysTable';
import { Header } from './components/Header';
import { Today } from './components/Today';


export default function Home() {
  const [today, setToday] = useState({});
  const [city, setCity] = useState();
  const [temp, setTemp] = useState();

  useEffect(() => {
    getResults().then((res) => {
      setToday(res.forecast[0]);
      setCity(res.city);
      setTemp(res.temp);
    });
  }, []);

  
  return (
    <View style={styles.container}>
        <Header city={city} />

        <Today today={today} temp={temp}/>

        <View  style={styles.cards}>
          <View style={styles.card_title}>
            <Text style={styles.midTexts}>Next Days</Text>
            <AntDesign name="calendar" size={18} color="white" />
          </View>
          <NextDaysTable/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    height: '100%',
    display: 'flex',
    flex: 1,
  },
  midTexts: {
    fontSize: 20,
    color: '#fff',
    fontWeight: "600",
  },
  cards: {
    backgroundColor: 'rgba(0,15,38,0.3)',
    borderRadius: 15,
    paddingHorizontal: 21,
    paddingVertical: 10,
    marginBottom: 10,
  },
  card_title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card_days: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});