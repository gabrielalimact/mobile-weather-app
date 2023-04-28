import { View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import RNPickerSelect from "react-native-picker-select";

export const Header = ({city}: any) => {
  return (
    <View style={styles.header}>
    <View style={styles.picker}>
      <MaterialIcons name="location-pin" color='white' style={{ marginRight: 12, fontSize: 18}}/>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        value={city}
        items={[{
          label: city,
          value: city,
          key: 1,
        }]}
        style={{
          inputIOS: {
            fontSize: 18,
            color: 'white',
          },
          inputAndroid: {
            fontSize: 18,
            color: 'white',
          },
        }}
        />
      <MaterialIcons name="arrow-drop-down" color='white' style={{ marginLeft: 12, fontSize: 18}}/>
    </View>
    
    <MaterialIcons name="notifications-active"  color='white'  style={{ marginLeft: 1, fontSize: 18}}/>

  </View>
  )
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  picker: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});