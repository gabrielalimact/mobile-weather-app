import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import Home from './src/views/Home';
import { LinearGradient } from 'expo-linear-gradient';
import { getNight } from './src/api/Weather/weatherService';
import { useEffect, useState } from 'react';

export default function App() {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    getNight().then((res : any) => {
      setIsNight(res);
    })
  }, [isNight]);

  const colors = isNight ? ["#08244F", "#134CB5", "#0B42AB"] : ["#29B2DD", "#33AADD", "#2DC8EA"]

  return (
    <LinearGradient style={styles.container} colors={colors}>
      <StatusBar style="light" />
      <ScrollView >
        <Home />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
});
