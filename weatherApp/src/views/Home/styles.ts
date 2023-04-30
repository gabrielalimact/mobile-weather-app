import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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