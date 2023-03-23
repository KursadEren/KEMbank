import { View, Text } from 'react-native'
import React from 'react';
import { Button } from "@react-native-material/core";



 function ButtonCom({gonder}) {
  return (
    <View>
      <Button
       title={gonder} 
       style={{ alignSelf: "center", marginTop: 40 }}/>
    </View>
  )
}
export default ButtonCom;