import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { getResults } from '../../api/Weather/weatherService';

import { NextDaysTable } from './components/NextDaysTable';
import { Header } from './components/Header';
import { Today } from './components/Today';

import { styles } from './styles';

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

