import { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native"
import { Ionicons } from '@expo/vector-icons';

import { getNextDays } from '../../../../api/Weather/weatherService';
import  { styles } from './styles';

export const NextDaysTable = ({data}: any) => {
  const [results , setResults] = useState([]);

  useEffect(() => {
    getNextDays().then((res) => {
      setResults(res);
    });
  }, [results]);

  const renderItem = ({ item, index } : any) => (
    <View style={styles.next_days}>
      <View style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Text key={item.weekday} style={styles.texts}>
          {item.weekday}
        </Text>
        <Text key={item.date} style={styles.smallTexts}>
          {item.date}
        </Text>
      </View>
      
      <View style={styles.midIcon}>
        {item.rain_probability > 50 ? 
        <>
          <Ionicons name="md-rainy-outline" color="white" size={30}/> 
          <Text key={item.rain_probability} style={styles.smallTexts}>{item.rain_probability}%</Text>
        </>
          : <Ionicons name="md-sunny-outline" color="white" size={30}/>}
      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
      }}>
        <Text key={item.max} style={[styles.smallTexts, { fontWeight: 'bold' }]}>
        {item.max}ºC
        </Text>
        <Text key={item.min} style={styles.smallTexts}>
        {item.min}ºC
        </Text>
      </View>
      
    </View>
  )


  return (
    <>
      {results.length>0 &&
        <FlatList
        data={results}
        renderItem={renderItem}
        scrollEnabled={false}
        contentContainerStyle={styles.contentContainer}
      />
      }
    </>
  )
}

