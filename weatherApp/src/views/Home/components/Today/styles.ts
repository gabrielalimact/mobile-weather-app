import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  temperature: {
    fontSize: 60,
    color: '#fff',
  },
  main_temp: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30,
  },

  smallTexts:{
    fontSize: 13,
    color: '#fff',
  },

  texts: {
    opacity: 1,
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
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
})