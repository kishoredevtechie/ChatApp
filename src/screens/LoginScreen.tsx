import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={styles.mainView}>
      <TextInput placeholder=''/>
      <Text>Hello</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  mainView:{
    backgroundColor:'#ffffff',
    flex:1,
  }
})