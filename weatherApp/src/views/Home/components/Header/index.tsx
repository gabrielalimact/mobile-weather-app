import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import RNPickerSelect from "react-native-picker-select";

import { styles } from './styles';

export const Header = ({ city }: any) => {
  const items = [
    { value: city, label: city }
  ]
  
  const pickerProps = {
    items: items.filter(item => item.label !== undefined),
  }

  return (
    <View style={styles.header}>
    <View style={styles.picker}>
      <MaterialIcons name="location-pin" color='white' style={{ marginRight: 12, fontSize: 18}}/>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        value={city}
        {...pickerProps}
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

