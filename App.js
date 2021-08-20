import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native';
import AppTextInput from './Components/customComponents/AppTextInput';
import { COLORS, } from './Components/constants/themes';

import Zuri from './assets/zuri.png'
import I4g from './assets/I4G-Logo-Color-Cropped.png'
import Brand from './assets/brand-logo.png'



function App() {
  const [text, setText] = useState('')
  return (
    <>
      <SafeAreaView style={{ backgroundColor: COLORS.black, }}></SafeAreaView>
      <View>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: COLORS.black,
            alignItems: 'center'
          }}>
          <Text style={{
            fontSize: 20,
            fontWeight: '500',
            color: COLORS.white,

          }}>HNGI8 Stage 2 Task</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image source={Zuri} />
          <Image source={I4g} style={{ width: '90%', height: 80 }} />
          <Image source={Brand} style={{ width: '100%', height: 80, paddingBottom: 20 }} />

        </View>
        <View>
          <Text>Go to <Text style={{ color: COLORS.blue, textDecorationLine: 'underline' }}>https://hng.tech</Text> to join the next internship</Text>
        </View>
        <View style={{
          width: '100%',
          height: '70%',
          backgroundColor: COLORS.black,
          alignItems: 'center',
          paddingTop: 40
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: '500',
            color: COLORS.white,

          }}>{text}</Text>

          <AppTextInput
            placeholder={'Type here to see something cool'}
            onChangeText={value => setText(value)}
          />
        </View>
      </View>
    </>
  )
}


export default App;
