import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  smallTexts: {
    color: '#fff',
    fontSize: 12,
  }

})