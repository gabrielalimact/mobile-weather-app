import { View, Text, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';

import { getNight } from '../../../../api/Weather/weatherService';
import night from '../../../../../assets/night.png';
import sun from '../../../../../assets/sun.png';
import { styles } from './styles';


export const Today = ({today, temp} : any) => {
  const [isNight, setIsNight] = useState(false);
  
  useEffect(() => {
    getNight().then((res) => {
      setIsNight(res);
    })
  }, [isNight]);
  
  const mainImage = isNight ? night : sun;
  return (
    <>
      <View style={styles.main_temp}>
        <Image source={mainImage} style={{
          marginTop: 30,
        }}/>
        <Text style={styles.temperature}>{temp}º</Text>
        <Text style={styles.texts}>{today.description}</Text>
        <Text style={styles.smallTexts}>Max: {today.max}º Min.: {today.min}º</Text>
      </View>
      <View style={[styles.cards, styles.card_title]}>
      <View style={{ 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
      }}>
        <Ionicons name="md-rainy-outline" color="white" size={18}/>
        <Text style={styles.smallTexts}>{today.rain_probability}%</Text>
      </View>
      <View style={{ 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
      }}>
        <Ionicons name="thermometer-outline" color="white" size={18}/>
        <Text style={styles.smallTexts}>{today.rain}</Text>
      </View>
      <View style={{ 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
      }}>
        <Feather name="wind" size={24} color="white" />
        <Text style={styles.smallTexts}>{today.wind_speedy}</Text>
      </View>

    </View>
    </>
    
  )
}

