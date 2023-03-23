import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonCom from './src/component/ButtonC/Button';
import TextFieldcom from './src/component/TextFieldC/TextField';

export default function App() {
  return (
    <View>
      <TextFieldcom/>
    </View>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
