import { FlatList, View, Text, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { getNextDays } from '../../../../api/auth';
import { useEffect, useState } from "react";

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
        <Text key={item.weekday} style={{color: '#fff', fontSize: 18}}>
          {item.weekday}
        </Text>
        <Text key={item.date} style={{color: '#fff', fontSize: 12}}>
          {item.date}
        </Text>
      </View>
      
      <View style={styles.midIcon}>
        {item.rain_probability > 50 ? 
        <>
          <Ionicons name="md-rainy-outline" color="white" size={30}/> 
          <Text key={item.rain_probability} style={{color: '#fff', fontSize: 12}}>{item.rain_probability}%</Text>
        </>
          : <Ionicons name="md-sunny-outline" color="white" size={30}/>}
      </View>
      
      <Text key={item.max} style={[styles.texts, {fontSize: 14}]}>
      {item.max}ºC {item.min}ºC
      </Text>
    </View>
  )


  return (
    <>
      {results.length>0 &&
        <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={item => item.date}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
      }
    </>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    width:'100%',
    display: 'flex',
    marginTop: 10,
  },
  next_days: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  midIcon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
  },
  texts: {
    opacity: 1,
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },

})